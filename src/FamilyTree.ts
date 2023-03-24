import { fabric } from 'fabric';
import imgUrl from './assets/images/profile_icon.png';

export interface Node {
  name: string;
  patners: [
    {
      name: string;
      children: [Node];
    }
  ];
}

export default class FamilyTree {
  data;
  canvas;

  constructor(data: Node) {
    this.data = data;
    this.canvas = new fabric.Canvas('canvas', {
      width: 800,
      height: 800,
      hoverCursor: 'pointer',
    });
  }

  _createImageObject = (imageUrl: string) => {
    return new fabric.Image(imageUrl, {
      lockScalingFlip: true,
      crossOrigin: 'Anonymous',
    });
  };

  _setImageSrc = async (imageObject: fabric.Image, imageUrl: string) => {
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

  _createNode = async (
    left: number,
    top: number,
    text: string,
    fontSize: number
  ) => {
    let imageObject = this._createImageObject(imgUrl);
    imageObject = await this._setImageSrc(imageObject, imgUrl);

    const textObject = new fabric.Text(text, {
      fontSize,
      originX: 'center',
      originY: 'center',
      top: imageObject.getBoundingRect().height / 2 + fontSize,
    });

    const group = new fabric.Group([imageObject, textObject], {
      originX: 'center',
      originY: 'center',
      left,
      top,
      selectable: false,
    });
    return group;
  };

  _connectNodes = (
    node1: fabric.Circle,
    node2: fabric.Circle,
    stroke: string,
    strokeWidth: number
  ) => {
    // Connect the circle boundaries with a line
    const line = new fabric.Line(
      [node1.left, node1.top, node2.left, node2.top],
      {
        stroke,
        strokeWidth,
        selectable: false,
        evented: false,
      }
    );
    this.canvas.add(line);
  };

  draw = async () => {
    const canvasCenter = this.canvas.getCenter();
    const nodeObject = await this._createNode(
      canvasCenter.left,
      50,
      this.data.name,
      14
    );
    // const patner = createNode("green", 400, 200);
    // connectNodes(root, patner, "blue", 2);
    // const child = createNode("blue", 400, 350);
    // connectNodes(patner, child, "blue", 2);
    this.canvas.add(nodeObject);
    // canvas.add(patner);
    // canvas.add(child);
  };
}
