import FamilyTree, { Node } from './FamilyTree';

const root = {
  id: 1,
  name: 'Mukundarao',
  generation: 0,
  partners: [
    {
      id: 2,
      name: 'Shyamala',
      isMarried: true,
      children: [
        {
          id: 3,
          name: 'Ramakrishna',
          generation: 1,
          partners: [
            {
              id: 5,
              name: 'Jayasree',
              isMarried: true,
              children: [
                {
                  id: 6,
                  name: 'Ranjith',
                  generation: 2,
                  partners: [
                    {
                      id: 7,
                      name: 'Shilpa',
                      isMarried: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 4,
          name: 'Ramadevi',
          generation: 1,
          partners: [
            {
              id: 8,
              name: 'Gopinath',
              isMarried: true,
              children: [
                {
                  id: 9,
                  name: 'Reshmi',
                  generation: 2,
                  partners: [
                    {
                      id: 10,
                      name: 'Raj',
                      isMarried: true,
                      children: [
                        {
                          id: 11,
                          name: 'Pratham',
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
      ],
    },
  ],
} as Node;
const familyTree = new FamilyTree(root);
familyTree.drawTree();
