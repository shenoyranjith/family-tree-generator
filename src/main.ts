import FamilyTree, { Node } from './FamilyTree';

const root = {
  name: 'John',
  patners: [
    {
      name: 'Eva',
      children: [
        {
          name: 'Jack',
        },
      ],
    },
  ],
} as Node;
const familyTree = new FamilyTree(root);
familyTree.draw();
