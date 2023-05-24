<br/>
<p align="center">
  <h3 align="center">Family Tree Generator</h3>

  <p align="center">
    A simple family tree generator using fabric.js
    <br/>
    <br/>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/shenoyranjith/family-tree-generator/total) ![Contributors](https://img.shields.io/github/contributors/shenoyranjith/family-tree-generator?color=dark-green) ![Stargazers](https://img.shields.io/github/stars/shenoyranjith/family-tree-generator?style=social) ![Issues](https://img.shields.io/github/issues/shenoyranjith/family-tree-generator) ![License](https://img.shields.io/github/license/shenoyranjith/family-tree-generator) 

## About The Project

<strong>NOTE</strong>: The package is still under testing and isn't really ready yet for production use. Please feel free to log any issues you face and I will try to fix them ASAP.

![Screen Shot](images/image-1.png)

There are many great libraries out there to build a tree structure in Javascript. But none of them were simple use or in my case let you build a family tree specifically with multiple scenarios; such as supporting more than one partners or step/foster/adopted children. 

This simple tree generator takes your JSON data and builds a family tree using fabricjs on a HTML canvas. 

## Built With

Vanilla Typescript with [fabricjs](http://fabricjs.com/) and packaged using [Vite](https://vitejs.dev/).

## Getting Started


### Installation

```
npm install family-tree-generator
```

## Usage
The ```FamilyTree``` constructor requires you to pass the root node along with following canvas options: 
- <strong>id</strong>: ID of the HTML canvas element in the DOM on which the fabric canvas must be initialized.
- <strong>width</strong>: The canvas's width.
- <strong>height</strong>: The canvas's height.
- <strong>boundToParentSize</strong>: Sets the height and with to the parent elements clientHeight and clientWidth respectively.

```
import FamilyTree, { Node } from './FamilyTree';

const root = {
  id: 1,
  name: 'Test1',
  image:
    'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png',
  generation: 0,
  onClick: (node) => {
    console.log(node);
  },
  relationships: [
    {
      partner: {
        id: 2,
        name: 'Test2',
        onClick(node) {
          console.log(node);
        },
      },
      isMarried: true,
      children: [
        {
          id: 3,
          name: 'Test3',
          generation: 1,
          relationships: [
            {
              partner: {
                id: 4,
                name: 'Test4',
              },
              isMarried: true,
              children: [
                {
                  id: 5,
                  name: 'Test5',
                  generation: 2,
                },
              ],
            },
            {
              partner: {
                id: 25,
                name: 'Test25',
              },
              isMarried: true,
              children: [
                {
                  id: 26,
                  name: 'Test26',
                  generation: 2,
                },
              ],
            },
            {
              partner: {
                id: 27,
                name: 'Test27',
              },
              isMarried: false,
              children: [
                {
                  id: 28,
                  name: 'Test28',
                  generation: 2,
                },
              ],
            },
          ],
        },
        {
          id: 6,
          name: 'Test6',
          generation: 1,
          relationships: [
            {
              partner: {
                id: 7,
                image:
                  'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png',
                name: 'Test7',
              },
              isMarried: true,
              children: [
                {
                  id: 8,
                  name: 'Test8',
                  generation: 2,
                  relationships: [
                    {
                      partner: {
                        id: 9,
                        name: 'Test9',
                      },
                      isMarried: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 10,
          name: 'Test10',
          generation: 1,
          relationships: [
            {
              partner: {
                id: 11,
                name: 'Test11',
              },
              isMarried: true,
              children: [
                {
                  id: 12,
                  name: 'Test12',
                  generation: 2,
                  relationships: [
                    {
                      partner: {
                        id: 13,
                        name: 'Test13',
                      },
                      isMarried: true,
                      children: [
                        {
                          id: 14,
                          name: 'Test14',
                          generation: 3,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 15,
          name: 'Test15',
          generation: 1,
          relationships: [
            {
              partner: {
                id: 16,
                name: 'Test16',
              },
              isMarried: true,
              children: [
                {
                  id: 17,
                  name: 'Test17',
                  image:
                    'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png',
                  generation: 2,
                  relationships: [
                    {
                      partner: {
                        id: 18,
                        name: 'Test18',
                      },
                      isMarried: true,
                    },
                  ],
                },
                {
                  id: 19,
                  name: 'Test19',
                  generation: 2,
                  relationships: [
                    {
                      partner: {
                        id: 20,
                        name: 'Test20',
                      },
                      isMarried: true,
                      children: [
                        {
                          id: 21,
                          name: 'Test21',
                          generation: 3,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 22,
          name: 'Test22',
          generation: 1,
          relationships: [
            {
              children: [
                {
                  id: 24,
                  name: 'Test24',
                  generation: 2,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
} as Node;
const familyTree = new FamilyTree(root, {
  id: 'canvas',
  width: 1920,
  height: 1080,
  boundToParentSize: true
});
familyTree.drawTree();

```

There are two types exposed by the module
```
export interface Relation {
    partner: Node | undefined;
    isMarried: boolean | undefined;
    children: Node[];
    _relation?: fabric.Line;
    _parentLine?: fabric.Line;
}
export interface Node {
    id: string | number;
    name: string;
    image?: string;
    generation?: number;
    relationships: Relation[];
    onClick?: (node: Node) => void;
    _object?: fabric.Group;
    _childLine: fabric.Group;
}
```

### Node
- <strong>id</strong>: A unique identifier for each node.
- <strong>name</strong>: Name of the node that is displayed in the tree.
- <strong>image</strong>: URL for the node image. If none is provided, the default one is used.
- <strong>generation</strong>: The family generation to which the node belongs to.
- <strong>relationships</strong>: A list of all the relationships of the current node.
- <strong>onClick</strong>: An ```onclick``` callback can be provided for the node which gives you back the corresponding node that was clicked as a parameter.

### Relation
- <strong>partner</strong>: The partner node. If skipped, the child relation is draw from the current node.
- <strong>isMarried</strong>: If true, the partner relation line is drawn as a solid line. Otherwise, a dashed line is drawn.
- <strong>children</strong>: A list of child nodes.

### Canvas
The fabric canvas object can be accessed as follows
```
const familyTree = new FamilyTree(root, {
  id: 'canvas',
  width: 1920,
  height: 1080,
  boundToParentSize: true
});
familyTree.canvas.renderAll();
```

### Zoom and pan
- Use the mouse wheel to zoom in and out when hovering over the canvas.
- To pan, just hold down the left mouse button and move the mouse around on the canvas or on touch screen, use pinch zoom.
- To reset the zoom and pan back to center, double click the left mouse button or long press on touch screen on the canvas.   

## License

Distributed under the MIT License. See [LICENSE](https://github.com/shenoyranjith/family-tree-generator/LICENSE.md) for more information.

## Authors

* **Ranjith R Shenoy** - *An enthusiastic software developer* - [Ranjith R Shenoy](https://github.com/shenoyranjith/)
