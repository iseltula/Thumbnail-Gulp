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

var Badge = React.createClass({displayName: "Badge",
  render: function(){
    return React.createElement("button", {className: "btn btn-primary", type: "button"},  this.props.title, React.createElement("span", {className: "badge"},
    this.props.number))
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function(){
    return React.createElement("div", {className: "col-sm6 col-md-4"},
     React.createElement("div", {className: "thumbnail"},
        React.createElement("img", {src: this.props.imageUrl}),
        React.createElement("div", {className: "caption"},
          React.createElement("h3", null, this.props.header),
          React.createElement("p", null, this.props.description),
          React.createElement("p", null,
          React.createElement(Badge, {title: this.props.title, number: this.props.number})
          )
        )
      )
      )
  }
});

var ThumbnailList = React.createClass ({displayName: "ThumbnailList",
  render: function(){
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      return ( React.createElement(Thumbnail, React.__spread({},  thumbnailProps)));
    });
    return React.createElement("div", null,
      list

    )
  }
});
