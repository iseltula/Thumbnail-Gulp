(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\Isel\\Documents\\ThumbnailGulp\\src\\app.jsx":[function(require,module,exports){
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
},{}]},{},["C:\\Users\\Isel\\Documents\\ThumbnailGulp\\src\\app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOlxcVXNlcnNcXElzZWxcXERvY3VtZW50c1xcVGh1bWJuYWlsR3VscFxcc3JjXFxhcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBSSxPQUFPLEdBQUc7RUFDWixhQUFhLENBQUMsQ0FBQztnQkFDRCxLQUFLLEVBQUUsZUFBZTtnQkFDdEIsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLGFBQWE7Z0JBQ3JCLFdBQVcsQ0FBQyxhQUFhO2dCQUN6QixRQUFRLENBQUMsK0NBQStDO2VBQ3pEO2NBQ0Q7Y0FDQSxLQUFLLEVBQUUsZUFBZTtjQUN0QixNQUFNLEVBQUUsRUFBRTtjQUNWLE1BQU0sRUFBRSxZQUFZO2NBQ3BCLFdBQVcsQ0FBQyxhQUFhO2NBQ3pCLFFBQVEsQ0FBQyw0REFBNEQ7YUFDdEU7V0FDRjtBQUNYLFdBQVcsQ0FBQzs7QUFFWixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6RCxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIG9wdGlvbnMgPSB7XHJcbiAgdGh1bWJuYWlsRGF0YTpbe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTZWUgdHV0b3JpYWxzJyxcclxuICAgICAgICAgICAgICAgIG51bWJlcjogMzIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6ICdMZWFybiBSZWFjdCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjonIExvcmVtLi4uLi4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6J2h0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2ltZy9sb2dvLnN2ZydcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ1NlZSB0dXRvcmlhbHMnLFxyXG4gICAgICAgICAgICAgIG51bWJlcjogMjUsXHJcbiAgICAgICAgICAgICAgaGVhZGVyOiAnTGVhcm4gR3VscCcsXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246JyBMb3JlbS4uLi4uJyxcclxuICAgICAgICAgICAgICBpbWFnZVVybDonaHR0cHM6Ly9hdmF0YXJzMC5naXRodWJ1c2VyY29udGVudC5jb20vdS82MjAwNjI0P3Y9MyZzPTQwMCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgICAgfTtcclxuXHJcbnZhciBlbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChUaHVtYm5haWxMaXN0LG9wdGlvbnMpO1xyXG5SZWFjdERPTS5yZW5kZXIoZWxlbWVudCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKSk7XHJcbiJdfQ==
