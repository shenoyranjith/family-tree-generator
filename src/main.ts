import FamilyTree, { Node } from './FamilyTree';

const root = {
  id: 1,
  name: 'Mukundarao',
  image:
    'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png',
  generation: 0,
  partners: [
    {
      id: 2,
      name: 'Shyamala',
      isMarried: true,
      children: [
        {
          id: 3,
          name: 'Indira',
          generation: 1,
          partners: [
            {
              id: 5,
              name: 'Sreedhar',
              isMarried: true,
              children: [
                {
                  id: 6,
                  name: 'Sindhu',
                  generation: 2,
                },
              ],
            },
          ],
        },
        {
          id: 7,
          name: 'Ramakrishna',
          generation: 1,
          partners: [
            {
              id: 8,
              name: 'Jayasree',
              isMarried: true,
              children: [
                {
                  id: 9,
                  name: 'Ranjith',
                  generation: 2,
                  partners: [
                    {
                      id: 10,
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
          id: 11,
          name: 'Ramadevi',
          generation: 1,
          partners: [
            {
              id: 12,
              name: 'Gopinath',
              isMarried: true,
              children: [
                {
                  id: 13,
                  name: 'Reshmi',
                  generation: 2,
                  partners: [
                    {
                      id: 14,
                      name: 'Raj',
                      isMarried: true,
                      children: [
                        {
                          id: 15,
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
        {
          id: 16,
          name: 'Padmini',
          generation: 1,
          partners: [
            {
              id: 17,
              name: 'Rajesh',
              isMarried: true,
              children: [
                {
                  id: 18,
                  name: 'Sowmya',
                  generation: 2,
                  partners: [
                    {
                      id: 19,
                      name: 'Arjun',
                      isMarried: true,
                    },
                  ],
                },
                {
                  id: 20,
                  name: 'Swathi',
                  generation: 2,
                  partners: [
                    {
                      id: 21,
                      name: 'Pradeep',
                      isMarried: true,
                      children: [
                        {
                          id: 22,
                          name: 'Trishika',
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
          id: 23,
          name: 'Rajalakshmi',
          generation: 1,
          partners: [
            {
              id: 24,
              name: 'Sridhar',
              isMarried: true,
              children: [
                {
                  id: 25,
                  name: 'Rithwik',
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
  width: 1000,
  height: 1000,
});
familyTree.drawTree();
