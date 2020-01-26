const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');




function toggle() {

    let icon = this.children[0].innerHTML;
    if (icon === 'folder_open') {
        this.children[0].innerHTML = 'folder'; 
    } else {
        this.children[0].innerHTML = 'folder_open'; 
    }
    let folderBlock = this.nextElementSibling.style.display;
    if (folderBlock === 'block') {
        this.nextElementSibling.style.display = 'none';
    } else {
        this.nextElementSibling.style.display = 'block';
    }
}
