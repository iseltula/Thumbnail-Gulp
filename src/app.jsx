var options = {
  thumbnailData:[{
                title: 'See tutorials',
                number: 32,
                header: 'Learn React',
                description:' Lorem.....',
                imageUrl:'https://facebook.github.io/react/img/logo.svg'
              },
              {
              title: 'See tutorials',
              number: 25,
              header: 'Learn Gulp',
              description:' Lorem.....',
              imageUrl:'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
            }
          ]
          };

var element = React.createElement(ThumbnailList,options);
ReactDOM.render(element, document.getElementById('content'));
