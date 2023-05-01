import imgUrl from './assets/images/profile_img.png';

const fontSize = 18;
const minimumDistanceBetweenNodes = 150;
const verticalDistanceBetweenNodes = 200;
const nodeRadius = 64;

export interface Relation {
  partner: Node | undefined;
  isMarried: boolean | undefined;
  children: Node[];
  _relation?: any; // fabric.Line
  _parentLine?: any; // fabric.Line
}

export interface Node {
  id: string | number;
  name: string;
  image?: string;
  generation?: number;
  relationships: Relation[];
  onClick?: (node: Node) => void;
  _object?: any; // fabric.Group
  _childLine: any; // fabric.Group
}

// @ts-ignore
const NodeGroup = fabric.util.createClass(fabric.Group, {
  type: 'nodeGroup',
  initialize: function (objects: any[], options: any) {
    options || (options = {});
    this.callSuper('initialize', objects, options);
    this.set('isNode', true);
  },
});

const lineStyles = {
  stroke: 'black',
  strokeWidth: 3,
  selectable: false,
  evented: false,
};

export default class FamilyTree {
  private declare root: Node;
  declare canvas: any;

  constructor(root: Node, options: any) {
    this.root = root;
    this.canvas = this._createCanvas(options);
    this._setupCanvas();
  }

  private _createCanvas = (options: any) => {
    const canvasEle = document.getElementById(options.id);
    const parentEle = canvasEle?.parentElement;
    let height =
      parentEle != undefined &&
      options.height > parentEle.clientHeight &&
      options.boundToParentSize
        ? parentEle.clientHeight
        : options.height;
    let width =
      parentEle != undefined &&
      options.width > parentEle.clientWidth &&
      options.boundToParentSize
        ? parentEle.clientWidth
        : options.width;
    // @ts-ignore
    return new fabric.Canvas(options.id, {
      width: width,
      height: height,
      hoverCursor: 'pointer',
      selection: false,
      allowTouchScrolling: true,
      enableRetinaScaling: false,
      isDrawingMode: false,
    });
  };

  private _setupCanvas = () => {
    // Setup zoom
    // Set maximum zoom as 2000% and minimum as 10%
    function mouseZoom(this: any, opt: any) {
      const evt = opt.e as WheelEvent;
      const delta = evt.deltaY;
      let zoom = this.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 20) {
        zoom = 20;
      }
      if (zoom < 0.1) {
        zoom = 0.1;
      }
      this.zoomToPoint({ x: evt.offsetX, y: evt.offsetY }, zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
    }
    function touchZoom(this: any, opt: any) {
      const evt = opt.e as TouchEvent;
      // Handle zoom only if 2 fingers are touching the screen
      if (evt.touches && evt.touches.length == 2) {
        this.isDragging = false;
        // @ts-ignore
        let point1 = new fabric.Point(
          evt.touches[0].clientX,
          evt.touches[0].clientY
        );
        // @ts-ignore
        let point2 = new fabric.Point(
          evt.touches[1].clientX,
          evt.touches[1].clientY
        );
        let midPoint = point1.midPointFrom(point2);
        if (opt.self.state == 'start') {
          this.zoomStartScale = this.getZoom();
        }
        let delta = this.zoomStartScale * opt.self.scale;
        console.log(midPoint);
        this.zoomToPoint(midPoint, delta);
        this.isDragging = true;
      }
    }
    function resetCanvas(this: any) {
      var vpt = this.viewportTransform as number[];
      vpt[4] = this.getCenter().left - minimumDistanceBetweenNodes;
      vpt[5] = minimumDistanceBetweenNodes;
      this.setViewportTransform(vpt);
      this.setZoom(1);
      this.requestRenderAll();
    }

    this.canvas.on('mouse:wheel', mouseZoom);
    this.canvas.on('touch:gesture', touchZoom);
    this.canvas.on('touch:longpress', resetCanvas);
    this.canvas.on('mouse:dblclick', resetCanvas);

    // Setup pan by dragging on mouse press and hold
    this.canvas.on('mouse:down', function (this: any, opt: any) {
      if (opt.target) {
        return;
      }
      var evt = opt.e as MouseEvent | TouchEvent;
      let isTouch =
        evt.type === 'touchstart' && (evt as TouchEvent).touches.length === 1;
      this.isDragging = true;
      this.setCursor('grabbing');
      this.lastPosX = isTouch
        ? (evt as TouchEvent).touches[0].clientX
        : (evt as MouseEvent).clientX;
      this.lastPosY = isTouch
        ? (evt as TouchEvent).touches[0].clientY
        : (evt as MouseEvent).clientY;
    });
    this.canvas.on('mouse:move', function (this: any, opt: any) {
      if (this.isDragging) {
        let isTouch = opt.e.type === 'touchmove';
        var evt = opt.e as MouseEvent | TouchEvent;
        let clientX = isTouch
          ? (evt as TouchEvent).touches[0].clientX
          : (evt as MouseEvent).clientX;
        let clientY = isTouch
          ? (evt as TouchEvent).touches[0].clientY
          : (evt as MouseEvent).clientY;
        const zoom = this.getZoom();
        var vpt = this.viewportTransform as number[];
        vpt[4] += clientX - this.lastPosX;
        vpt[5] += clientY - this.lastPosY;

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
        this.lastPosX = clientX;
        this.lastPosY = clientY;
      }
    });
    this.canvas.on('mouse:up', function (this: any) {
      // on mouse up we want to recalculate new interaction
      // for all objects, so we call setViewportTransform
      this.setViewportTransform(this.viewportTransform as number[]);
      this.isDragging = false;
    });
  };

  private _setImageSrc = async (
    imageObject: any,
    imageUrl: string
  ): Promise<any> => {
    return new Promise((resolve, reject) => {
      imageObject.setSrc(
        imageUrl,
        function (img: any) {
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
    imageUrl = imageUrl || (imgUrl as string);
    // @ts-ignore
    let imageObject = new fabric.Image(imageUrl, {
      lockScalingFlip: true,
      crossOrigin: 'Anonymous',
    });
    imageObject = await this._setImageSrc(imageObject, imageUrl);
    imageObject.scale((nodeRadius * 2) / (imageObject.width as number));

    // Clip image to circle
    // @ts-ignore
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

    // @ts-ignore
    const textObject = new fabric.Text(text, {
      fontSize: fontSize,
      originX: 'center',
      originY: 'center',
      fontWeight: 'bold',
      top: imageObject.getScaledHeight() / 2 + fontSize,
    });

    const group = new NodeGroup([imageObject, textObject], {
      originX: 'center',
      originY: 'center',
      selectable: false,
      isNode: true,
    });
    return group;
  };

  private _drawPartnerLine = (node1: any, node2: any, isMarried: boolean) => {
    const node1Center = node1.getCenterPoint();
    const node2Center = node2.getCenterPoint();
    // @ts-ignore
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

  private _drawParentLine = (
    parent: any | Node,
    isFirst: boolean | undefined
  ) => {
    let parentLineOrigin: any;
    // @ts-ignore
    if (parent instanceof fabric.Line) {
      parentLineOrigin = parent.getCenterPoint();
      if (!isFirst) {
        parentLineOrigin = parentLineOrigin.add(
          // @ts-ignore
          new fabric.Point(
            ((parent.x2 as number) - (parent.x1 as number)) / 2 - nodeRadius,
            0
          )
        );
      }
    } else {
      parentLineOrigin = parent._object?.getCenterPoint();
    }
    // @ts-ignore
    const line = new fabric.Line(
      [
        parentLineOrigin.x,
        parentLineOrigin.y,
        parentLineOrigin.x,
        parentLineOrigin.y + verticalDistanceBetweenNodes,
      ],
      {
        ...lineStyles,
        // @ts-ignore
        strokeDashArray: parent instanceof fabric.Line ? [] : [5, 5],
      }
    );
    return line;
  };

  private _drawChildLine = (child: Node, parentLine: any) => {
    const childObject = child._object;
    const childCenter = childObject.getCenterPoint();
    const strokeWidth = parentLine.strokeWidth ? parentLine.strokeWidth : 0;
    // @ts-ignore
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
    // @ts-ignore
    const verticalLine = new fabric.Line(
      [
        horizontalLine.x2 as number,
        horizontalLine.y2 as number,
        childCenter.x,
        childCenter.y - nodeRadius - fontSize,
      ],
      lineStyles
    );
    // @ts-ignore
    child._childLine = new fabric.Group([horizontalLine, verticalLine], {
      selectable: false,
    });
    this.canvas.add(child._childLine);
  };

  private _drawNode = async (node: Node) => {
    const canvasCenter = this.canvas.getCenter();
    // Create node
    const nodeObject = await this._createNode(node.name, node.image);
    nodeObject.on('mousedown', () => {
      node.onClick && node.onClick(node);
    });
    node._object = nodeObject;
    const relationships = node.relationships;

    let left = canvasCenter.left;
    const top =
      minimumDistanceBetweenNodes * ((node.generation as number) + 1) +
      (node.generation as number) * verticalDistanceBetweenNodes;
    nodeObject.set({ left, top });
    this.canvas.add(nodeObject);

    // Create partners
    if (relationships && relationships.length > 0) {
      // bring partners that married to the front
      relationships.sort((a, b) => {
        if (a.isMarried && !b.isMarried) {
          return -1;
        } else if (!a.isMarried && b.isMarried) {
          return 1;
        } else {
          return 0;
        }
      });

      for (const relationship of node.relationships) {
        if (relationship.partner) {
          const parnterNode = await this._createNode(
            relationship.partner.name,
            relationship.partner.image
          );
          parnterNode.on('mousedown', () => {
            relationship.partner?.onClick &&
              relationship.partner.onClick(relationship.partner);
          });
          relationship.partner._object = parnterNode;
          parnterNode.set({ left, top });
          this.canvas.add(parnterNode);
        }

        // Create children
        if (relationship.children && relationship.children.length > 0) {
          for (const child of relationship.children) {
            await this._drawNode(child);
          }
        }
      }
    }
  };

  private _groupNodes = (generations: [any][], node: Node) => {
    if (generations[node.generation as number]) {
      generations[node.generation as number].push(node._object);
    } else {
      generations[node.generation as number] = [node._object];
    }
    node.relationships &&
      generations[node.generation as number].push(
        ...node.relationships.map(
          (relationship: Relation) => relationship.partner?._object
        )
      );
    node.relationships &&
      node.relationships.forEach((relationship: Relation) => {
        relationship.children &&
          relationship.children.forEach((child: Node) => {
            this._groupNodes(generations, child);
          });
      });
  };

  private _positionNodes = () => {
    let generations: [any][] = [];
    this._groupNodes(generations, this.root);
    const canvasCenter = this.canvas.getCenter();

    generations.forEach((generation: any[]) => {
      const generationWidth =
        generation.length * generation[0].getBoundingRect().width +
        (generation.length - 1) * minimumDistanceBetweenNodes;
      let left = canvasCenter.left - generationWidth / 2;
      generation.forEach((node: any | undefined) => {
        node && node.set({ left });
        left +=
          (node ? node.getBoundingRect().width : 0) +
          minimumDistanceBetweenNodes;
      });
    });
  };

  private _drawPartnerRelations = (node: Node) => {
    const relationships = node.relationships;
    if (relationships && relationships.length > 0) {
      for (const relationship of relationships) {
        if (relationship.partner) {
          relationship._relation = this._drawPartnerLine(
            node._object,
            relationship.partner._object,
            relationship.isMarried as boolean
          );
          this.canvas.add(relationship._relation);
        }
        if (relationship.children && relationship.children.length > 0) {
          for (const child of relationship.children) {
            this._drawPartnerRelations(child);
          }
        }
      }
    }
  };

  private _drawChildRelations = (node: Node) => {
    const relationships = node.relationships;
    if (relationships && relationships.length > 0) {
      for (const relationship of relationships) {
        if (relationship.children && relationship.children.length > 0) {
          relationship._parentLine = this._drawParentLine(
            relationship._relation ? relationship._relation : node,
            relationship.partner
              ? relationships.indexOf(relationship) === 0
              : undefined
          );
          this.canvas.add(relationship._parentLine);
          for (const child of relationship.children) {
            this._drawChildRelations(child);
            this._drawChildLine(child as Node, relationship._parentLine);
          }
        }
      }
    }
  };

  private _bringNodesToFront = () => {
    this.canvas.getObjects().forEach((object: any) => {
      if (object instanceof NodeGroup) {
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
