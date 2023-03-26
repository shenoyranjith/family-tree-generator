import { fabric } from 'fabric';
import imgUrl from './assets/images/profile_icon.png';

const fontSize = 14;
const minimumDistanceBetweenNodes = 100;
const verticalDistanceBetweenNodes = 100;
const nodeRadius = 18;

export interface Partner {
  id: number;
  name: string;
  isMarried: boolean;
  children: Node[];
  _object?: fabric.Group;
  _relation?: fabric.Line;
  _parentLine?: fabric.Line;
}

export interface Node {
  id: number;
  name: string;
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

const lineStyles = {
  stroke: 'black',
  strokeWidth: 3,
  selectable: false,
  evented: false,
};

export default class FamilyTree {
  root: Node;
  canvas: fabric.Canvas;

  constructor(root: Node) {
    this.root = JSON.parse(JSON.stringify(root));
    this.canvas = this._createCanvas();
    this._setupCanvas();
  }

  _createCanvas = () => {
    return new fabric.Canvas('canvas', {
      width: 800,
      height: 800,
      hoverCursor: 'pointer',
    });
  };

  _setupCanvas = () => {
    // Setup zoom
    // Set maximum zoom as 2000% and minimum as 1%
    this.canvas.on('mouse:wheel', function (this: Canvas, opt) {
      const delta = opt.e.deltaY;
      let zoom = this.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 20) {
        zoom = 20;
      }
      if (zoom < 0.01) {
        zoom = 0.01;
      }
      this.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
      var vpt = this.viewportTransform as number[];
      if (zoom < 400 / 1000) {
        vpt[4] = 200 - (1000 * zoom) / 2;
        vpt[5] = 200 - (1000 * zoom) / 2;
      } else {
        if (vpt[4] >= 0) {
          vpt[4] = 0;
        } else if (vpt[4] < this.getWidth() - 1000 * zoom) {
          vpt[4] = this.getWidth() - 1000 * zoom;
        }
        if (vpt[5] >= 0) {
          vpt[5] = 0;
        } else if (vpt[5] < this.getHeight() - 1000 * zoom) {
          vpt[5] = this.getHeight() - 1000 * zoom;
        }
      }
    });

    // Setup pan by dragging on pressing ctrl
    this.canvas.on('mouse:down', function (this: Canvas, opt) {
      var evt = opt.e;
      if (evt.ctrlKey === true) {
        this.isDragging = true;
        this.selection = false;
        this.lastPosX = evt.clientX;
        this.lastPosY = evt.clientY;
      }
    });
    this.canvas.on('mouse:move', function (this: Canvas, opt) {
      if (this.isDragging) {
        const e = opt.e;
        var vpt = this.viewportTransform as number[];
        vpt[4] += e.clientX - this.lastPosX;
        vpt[5] += e.clientY - this.lastPosY;
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
      this.selection = true;
    });
  };

  _createImageObject = (imageUrl: string) => {
    return new fabric.Image(imageUrl, {
      lockScalingFlip: true,
      crossOrigin: 'Anonymous',
    });
  };

  _setImageSrc = async (
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

  _createNode = async (text: string) => {
    let imageObject = this._createImageObject(imgUrl);
    imageObject = await this._setImageSrc(imageObject, imgUrl);

    const textObject = new fabric.Text(text, {
      fontSize: fontSize,
      originX: 'center',
      originY: 'center',
      top: imageObject.getBoundingRect().height / 2 + fontSize,
    });

    const group = new fabric.Group([imageObject, textObject], {
      originX: 'center',
      originY: 'center',
      selectable: false,
    });
    return group;
  };

  _drawPartnerLine = (node1: fabric.Group, node2: fabric.Group) => {
    const node1Center = node1.getCenterPoint();
    const node2Center = node2.getCenterPoint();
    const line = new fabric.Line(
      [
        node1Center.x + nodeRadius,
        node1Center.y - nodeRadius,
        node2Center.x - nodeRadius,
        node2Center.y - nodeRadius,
      ],
      lineStyles
    );
    return line;
  };

  _drawParentLine = (parentRelation: fabric.Line) => {
    const parentRelationCenter = parentRelation.getCenterPoint();
    const line = new fabric.Line(
      [
        parentRelationCenter.x,
        parentRelationCenter.y,
        parentRelationCenter.x,
        parentRelationCenter.y + minimumDistanceBetweenNodes,
      ],
      lineStyles
    );
    return line;
  };

  _drawChildLine = (child: Node, parentLine: fabric.Line) => {
    const childObject = child._object as fabric.Group;
    const childCenter = childObject.getCenterPoint();
    const horizontalLine = new fabric.Line(
      [
        (parentLine.x2 as number) +
          (parentLine.strokeWidth ? parentLine.strokeWidth : 0),
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
        childCenter.y - nodeRadius * 2,
      ],
      lineStyles
    );
    child._childLine = new fabric.Group([horizontalLine, verticalLine], {
      selectable: false,
    });
    this.canvas.add(child._childLine);
  };

  _drawNode = async (node: Node) => {
    const canvasCenter = this.canvas.getCenter();
    // Create node
    const nodeObject = await this._createNode(node.name);
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
      for (const partner of node.partners) {
        const parnterNode = await this._createNode(partner.name);
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

  _groupNodes = (generations: [fabric.Group][], node: Node) => {
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

  _positionNodes = () => {
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

  _drawPartnerRelations = (node: Node) => {
    const partners = node.partners;
    if (partners && partners.length > 0) {
      for (const partner of partners) {
        partner._relation = this._drawPartnerLine(
          node._object as fabric.Group,
          partner._object as fabric.Group
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

  _drawChildRelations = (node: Node) => {
    const partners = node.partners;
    if (partners && partners.length > 0) {
      for (const partner of partners) {
        if (partner.children && partner.children.length > 0) {
          partner._parentLine = this._drawParentLine(
            partner._relation as fabric.Line
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

  drawTree = async () => {
    // Recursively draw nodes
    await this._drawNode(this.root);

    // Position nodes
    this._positionNodes();

    // Draw partner relations
    this._drawPartnerRelations(this.root);

    // Draw child relations
    this._drawChildRelations(this.root);

    this.canvas.renderAll();
  };
}
