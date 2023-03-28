import FamilyTree, { Node } from './FamilyTree';

const root = {
  id: 1,
  name: 'Test1',
  image:
    'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png',
  generation: 0,
  partners: [
    {
      id: 2,
      name: 'Test2',
      isMarried: true,
      children: [
        {
          id: 3,
          name: 'Test3',
          generation: 1,
          partners: [
            {
              id: 25,
              name: 'Test25',
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
              id: 4,
              name: 'Test4',
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
              id: 27,
              name: 'Test27',
              isMarried: false,
              children: [
                {
                  id: 28,
                  name: 'Test28',
                  generation: 2,
                },
              ],
            },
            {
              id: 29,
              name: 'Test29',
              isMarried: false,
              children: [
                {
                  id: 30,
                  name: 'Test30',
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
          partners: [
            {
              id: 7,
              image:
                'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png',
              name: 'Test7',
              isMarried: true,
              children: [
                {
                  id: 8,
                  name: 'Test8',
                  generation: 2,
                  partners: [
                    {
                      id: 9,
                      name: 'Test9',
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
          partners: [
            {
              id: 11,
              name: 'Test11',
              isMarried: true,
              children: [
                {
                  id: 12,
                  name: 'Test12',
                  generation: 2,
                  partners: [
                    {
                      id: 13,
                      name: 'Test13',
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
          partners: [
            {
              id: 16,
              name: 'Test16',
              isMarried: true,
              children: [
                {
                  id: 17,
                  name: 'Test17',
                  image:
                    'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png',
                  generation: 2,
                  partners: [
                    {
                      id: 18,
                      name: 'Test18',
                      isMarried: true,
                    },
                  ],
                },
                {
                  id: 19,
                  name: 'Test19',
                  generation: 2,
                  partners: [
                    {
                      id: 20,
                      name: 'Test20',
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
          partners: [
            {
              id: 23,
              name: 'Test23',
              isMarried: true,
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
  width: 1000,
  height: 1000,
});
familyTree.drawTree();
