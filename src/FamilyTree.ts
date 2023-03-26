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
}

export interface Node {
  id: number;
  name: string;
  generation: number;
  partners: Partner[];
  _object?: fabric.Group;
}

export default class FamilyTree {
  root;
  canvas;

  constructor(root: Node) {
    this.root = JSON.parse(JSON.stringify(root));
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

  _connectPartners = (node1: fabric.Group, node2: fabric.Group) => {
    const node1Center = node1.getCenterPoint();
    const node2Center = node2.getCenterPoint();
    const line = new fabric.Line(
      [
        node1Center.x + nodeRadius,
        node1Center.y - nodeRadius,
        node2Center.x - nodeRadius,
        node2Center.y - nodeRadius,
      ],
      {
        stroke: 'black',
        strokeWidth: 3,
        selectable: false,
        evented: false,
      }
    );
    return line;
  };

  _connectChild = (child: fabric.Group, relation: fabric.Line) => {
    const relationCenter = relation.getCenterPoint();
    const childCenter = child.getCenterPoint();
    const line = new fabric.Line(
      [
        relationCenter.x,
        relationCenter.y,
        childCenter.x,
        childCenter.y - nodeRadius * 2,
      ],
      {
        stroke: 'black',
        strokeWidth: 3,
        selectable: false,
        evented: false,
      }
    );
    return line;
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

  _drawRelations = (node: Node) => {
    const partners = node.partners;
    if (partners && partners.length > 0) {
      for (const partner of partners) {
        partner._relation = this._connectPartners(
          node._object as fabric.Group,
          partner._object as fabric.Group
        );
        this.canvas.add(partner._relation);
        if (partner.children && partner.children.length > 0) {
          for (const child of partner.children) {
            this._drawRelations(child);
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

    // Draw relations
    this._drawRelations(this.root);

    this.canvas.renderAll();
  };
}
