import { fabric } from 'fabric';
import imgUrl from './assets/images/profile_img.png';

const fontSize = 18;
const minimumDistanceBetweenNodes = 100;
const verticalDistanceBetweenNodes = 200;
const nodeRadius = 64;

export interface Partner {
  id: string | number;
  name: string;
  image?: string;
  isMarried: boolean;
  children: Node[];
  _object?: fabric.Group;
  _relation?: fabric.Line;
  _parentLine?: fabric.Line;
}

export interface Node {
  id: string | number;
  name: string;
  image?: string;
  generation: number;
  partners: Partner[];
  _object?: fabric.Group;
  _childLine: fabric.Group;
}

interface Canvas extends fabric.Canvas {
  isDragging: boolean;
  lastPosX: number;
  lastPosY: number;
}

interface Options {
  id: string;
  width: number;
  height: number;
}

const lineStyles = {
  stroke: 'black',
  strokeWidth: 3,
  selectable: false,
  evented: false,
};

export default class FamilyTree {
  private declare root: Node;
  declare canvas: fabric.Canvas;

  constructor(root: Node, options: Options) {
    this.root = JSON.parse(JSON.stringify(root));
    this.canvas = this._createCanvas(options);
    this._setupCanvas();
  }

  private _createCanvas = (options: Options) => {
    return new fabric.Canvas(options.id, {
      width: options.width,
      height: options.height,
      hoverCursor: 'pointer',
      selection: false,
    });
  };

  private _setupCanvas = () => {
    // Setup zoom
    // Set maximum zoom as 2000% and minimum as 10%
    this.canvas.on('mouse:wheel', function (this: Canvas, opt) {
      const delta = opt.e.deltaY;
      let zoom = this.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 20) {
        zoom = 20;
      }
      if (zoom < 0.1) {
        zoom = 0.1;
      }
      this.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
    });

    // Setup pan by dragging on mouse press and hold
    this.canvas.on('mouse:down', function (this: Canvas, opt) {
      var evt = opt.e;
      this.isDragging = true;
      this.setCursor('grabbing');
      this.lastPosX = evt.clientX;
      this.lastPosY = evt.clientY;
    });
    this.canvas.on('mouse:move', function (this: Canvas, opt) {
      if (this.isDragging) {
        const e = opt.e;
        const zoom = this.getZoom();
        var vpt = this.viewportTransform as number[];
        vpt[4] += e.clientX - this.lastPosX;
        vpt[5] += e.clientY - this.lastPosY;

        // prevent infinite pan
        if (vpt[4] > this.getWidth()) {
          vpt[4] = this.getWidth();
        }
        if (vpt[4] < -(this.getWidth() * zoom)) {
          vpt[4] = -(this.getWidth() * zoom);
        }
        if (vpt[5] > this.getHeight()) {
          vpt[5] = this.getHeight();
        }
        if (vpt[5] < -(this.getHeight() * zoom)) {
          vpt[5] = -(this.getHeight() * zoom);
        }
        this.requestRenderAll();
        this.lastPosX = e.clientX;
        this.lastPosY = e.clientY;
      }
    });
    this.canvas.on('mouse:up', function (this: Canvas) {
      // on mouse up we want to recalculate new interaction
      // for all objects, so we call setViewportTransform
      this.setViewportTransform(this.viewportTransform as number[]);
      this.isDragging = false;
    });
  };

  private _setImageSrc = async (
    imageObject: fabric.Image,
    imageUrl: string
  ): Promise<fabric.Image> => {
    return new Promise((resolve, reject) => {
      imageObject.setSrc(
        imageUrl,
        function (img: fabric.Image) {
          img.set({
            originX: 'center',
            originY: 'center',
          });
          if (imageObject) {
            resolve(imageObject);
          } else {
            reject('image src not set');
          }
        },
        { crossOrigin: 'anonymous' }
      );
    });
  };

  private _createNode = async (text: string, imageUrl: string | undefined) => {
    imageUrl = imageUrl || imgUrl;
    let imageObject = new fabric.Image(imageUrl, {
      lockScalingFlip: true,
      crossOrigin: 'Anonymous',
    });
    imageObject = await this._setImageSrc(imageObject, imageUrl);
    imageObject.scale((nodeRadius * 2) / (imageObject.width as number));

    // Clip image to circle
    const clipPath = new fabric.Circle({
      radius: nodeRadius,
      originX: 'center',
      originY: 'center',
      // Image scaling is applied to the clip path, so we need to invert it
      scaleX: 1 / (imageObject.scaleX as number),
      scaleY: 1 / (imageObject.scaleY as number),
    });

    imageObject.set({
      clipPath: clipPath,
    });

    const textObject = new fabric.Text(text, {
      fontSize: fontSize,
      originX: 'center',
      originY: 'center',
      fontWeight: 'bold',
      top: imageObject.getScaledHeight() / 2 + fontSize,
    });

    const group = new fabric.Group([imageObject, textObject], {
      originX: 'center',
      originY: 'center',
      selectable: false,
    });
    return group;
  };

  private _drawPartnerLine = (
    node1: fabric.Group,
    node2: fabric.Group,
    isMarried: boolean
  ) => {
    const node1Center = node1.getCenterPoint();
    const node2Center = node2.getCenterPoint();
    const line = new fabric.Line(
      [
        node1Center.x + nodeRadius,
        node1Center.y - nodeRadius / 2,
        node2Center.x - nodeRadius,
        node2Center.y - nodeRadius / 2,
      ],
      {
        ...lineStyles,
        strokeDashArray: isMarried ? [] : [5, 5],
      }
    );
    return line;
  };

  private _drawParentLine = (parentRelation: fabric.Line, isFirst: boolean) => {
    let parentLineOrigin = parentRelation.getCenterPoint();
    if (!isFirst) {
      parentLineOrigin = parentLineOrigin.add(
        new fabric.Point(
          ((parentRelation.x2 as number) - (parentRelation.x1 as number)) / 2 -
            nodeRadius,
          0
        )
      );
    }
    const line = new fabric.Line(
      [
        parentLineOrigin.x,
        parentLineOrigin.y,
        parentLineOrigin.x,
        parentLineOrigin.y + verticalDistanceBetweenNodes,
      ],
      lineStyles
    );
    return line;
  };

  private _drawChildLine = (child: Node, parentLine: fabric.Line) => {
    const childObject = child._object as fabric.Group;
    const childCenter = childObject.getCenterPoint();
    const strokeWidth = parentLine.strokeWidth ? parentLine.strokeWidth : 0;
    const horizontalLine = new fabric.Line(
      [
        (parentLine.x2 as number) +
          ((parentLine.x2 as number) > childCenter.x ? strokeWidth : 0),
        parentLine.y2 as number,
        childCenter.x,
        parentLine.y2 as number,
      ],
      lineStyles
    );
    const verticalLine = new fabric.Line(
      [
        horizontalLine.x2 as number,
        horizontalLine.y2 as number,
        childCenter.x,
        childCenter.y - nodeRadius - fontSize,
      ],
      lineStyles
    );
    child._childLine = new fabric.Group([horizontalLine, verticalLine], {
      selectable: false,
    });
    this.canvas.add(child._childLine);
  };

  private _drawNode = async (node: Node) => {
    const canvasCenter = this.canvas.getCenter();
    // Create node
    const nodeObject = await this._createNode(node.name, node.image);
    node._object = nodeObject;
    const partners = node.partners;

    let left = canvasCenter.left;
    const top =
      minimumDistanceBetweenNodes * (node.generation + 1) +
      node.generation * verticalDistanceBetweenNodes;
    nodeObject.set({ left, top });
    this.canvas.add(nodeObject);

    // Create partners
    if (partners && partners.length > 0) {
      // bring partners that married to the front
      partners.sort((a, b) => {
        if (a.isMarried && !b.isMarried) {
          return -1;
        } else if (!a.isMarried && b.isMarried) {
          return 1;
        } else {
          return 0;
        }
      });

      for (const partner of node.partners) {
        const parnterNode = await this._createNode(partner.name, partner.image);
        partner._object = parnterNode;
        parnterNode.set({ left, top });
        this.canvas.add(parnterNode);

        // Create children
        if (partner.children && partner.children.length > 0) {
          for (const child of partner.children) {
            await this._drawNode(child);
          }
        }
      }
    }
  };

  private _groupNodes = (generations: [fabric.Group][], node: Node) => {
    if (generations[node.generation]) {
      generations[node.generation].push(node._object as fabric.Group);
    } else {
      generations[node.generation] = [node._object as fabric.Group];
    }
    node.partners &&
      generations[node.generation].push(
        ...node.partners.map(
          (partner: Partner) => partner._object as fabric.Group
        )
      );
    node.partners &&
      node.partners.forEach((partner: Partner) => {
        partner.children &&
          partner.children.forEach((child: Node) => {
            this._groupNodes(generations, child);
          });
      });
  };

  private _positionNodes = () => {
    let generations: [fabric.Group][] = [];
    this._groupNodes(generations, this.root);
    const canvasCenter = this.canvas.getCenter();

    generations.forEach((generation: fabric.Group[]) => {
      const generationWidth =
        generation.length * generation[0].getBoundingRect().width +
        (generation.length - 1) * minimumDistanceBetweenNodes;
      let left = canvasCenter.left - generationWidth / 2;
      generation.forEach((node: fabric.Group) => {
        node.set({ left });
        left += node.getBoundingRect().width + minimumDistanceBetweenNodes;
      });
    });
  };

  private _drawPartnerRelations = (node: Node) => {
    const partners = node.partners;
    if (partners && partners.length > 0) {
      for (const partner of partners) {
        partner._relation = this._drawPartnerLine(
          node._object as fabric.Group,
          partner._object as fabric.Group,
          partner.isMarried
        );
        this.canvas.add(partner._relation);
        if (partner.children && partner.children.length > 0) {
          for (const child of partner.children) {
            this._drawPartnerRelations(child);
          }
        }
      }
    }
  };

  private _drawChildRelations = (node: Node) => {
    const partners = node.partners;
    if (partners && partners.length > 0) {
      for (const partner of partners) {
        if (partner.children && partner.children.length > 0) {
          partner._parentLine = this._drawParentLine(
            partner._relation as fabric.Line,
            partners.indexOf(partner) === 0
          );
          this.canvas.add(partner._parentLine);
          for (const child of partner.children) {
            this._drawChildRelations(child);
            this._drawChildLine(
              child as Node,
              partner._parentLine as fabric.Line
            );
          }
        }
      }
    }
  };

  private _bringNodesToFront = () => {
    this.canvas.getObjects().forEach((object: fabric.Object) => {
      if (object instanceof fabric.Group) {
        object.bringToFront();
      }
    });
  };

  drawTree = async () => {
    // Recursively draw nodes
    await this._drawNode(this.root);

    // Position nodes
    this._positionNodes();

    // Draw partner relations
    this._drawPartnerRelations(this.root);

    // Draw child relations
    this._drawChildRelations(this.root);

    this._bringNodesToFront();

    this.canvas.renderAll();
  };
}
