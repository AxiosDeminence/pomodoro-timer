function cov_1d9v7lu7jc() {
  var path = "D:\\\u5B66\u4E60\\21WI\\CSE110\\cse110-w21-group13\\source\\src\\scripts\\FocusMode.js";
  var hash = "3386fdcfb4135792c99d1d3021769f274efcfd08";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\\u5B66\u4E60\\21WI\\CSE110\\cse110-w21-group13\\source\\src\\scripts\\FocusMode.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 21
        },
        end: {
          line: 3,
          column: 60
        }
      },
      "1": {
        start: {
          line: 4,
          column: 24
        },
        end: {
          line: 4,
          column: 60
        }
      },
      "2": {
        start: {
          line: 5,
          column: 20
        },
        end: {
          line: 5,
          column: 61
        }
      },
      "3": {
        start: {
          line: 6,
          column: 22
        },
        end: {
          line: 6,
          column: 59
        }
      },
      "4": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 39
        }
      },
      "5": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 42
        }
      },
      "6": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 38
        }
      },
      "7": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 40
        }
      },
      "8": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 20,
          column: 5
        }
      },
      "9": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 47
        }
      },
      "10": {
        start: {
          line: 15,
          column: 8
        },
        end: {
          line: 15,
          column: 49
        }
      },
      "11": {
        start: {
          line: 16,
          column: 22
        },
        end: {
          line: 16,
          column: 61
        }
      },
      "12": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 19,
          column: 9
        }
      },
      "13": {
        start: {
          line: 18,
          column: 12
        },
        end: {
          line: 18,
          column: 33
        }
      },
      "14": {
        start: {
          line: 22,
          column: 17
        },
        end: {
          line: 22,
          column: 56
        }
      },
      "15": {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 23,
          column: 48
        }
      }
    },
    fnMap: {
      "0": {
        name: "toggleState",
        decl: {
          start: {
            line: 1,
            column: 9
          },
          end: {
            line: 1,
            column: 20
          }
        },
        loc: {
          start: {
            line: 1,
            column: 23
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        }, {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        }],
        line: 11
      },
      "1": {
        loc: {
          start: {
            line: 17,
            column: 8
          },
          end: {
            line: 19,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 8
          },
          end: {
            line: 19,
            column: 9
          }
        }, {
          start: {
            line: 17,
            column: 8
          },
          end: {
            line: 19,
            column: 9
          }
        }],
        line: 17
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3386fdcfb4135792c99d1d3021769f274efcfd08"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1d9v7lu7jc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1d9v7lu7jc();

function toggleState() {
  cov_1d9v7lu7jc().f[0]++;
  // elements -- popup button, task list div, pomodoro timer div, focus task
  const popUpBtn = (cov_1d9v7lu7jc().s[0]++, document.getElementById('popup-button'));
  const taskListDiv = (cov_1d9v7lu7jc().s[1]++, document.getElementById('task-list'));
  const pomoDiv = (cov_1d9v7lu7jc().s[2]++, document.getElementById('pomodoro-timer'));
  const focusTask = (cov_1d9v7lu7jc().s[3]++, document.getElementById('focus-task'));
  cov_1d9v7lu7jc().s[4]++;
  popUpBtn.classList.toggle('state');
  cov_1d9v7lu7jc().s[5]++;
  taskListDiv.classList.toggle('state');
  cov_1d9v7lu7jc().s[6]++;
  pomoDiv.classList.toggle('state');
  cov_1d9v7lu7jc().s[7]++;
  focusTask.classList.toggle('state');
  cov_1d9v7lu7jc().s[8]++;

  if (localStorage.getItem('state') === 'default') {
    cov_1d9v7lu7jc().b[0][0]++;
    cov_1d9v7lu7jc().s[9]++;
    localStorage.setItem('state', 'focus');
  } else {
    cov_1d9v7lu7jc().b[0][1]++;
    cov_1d9v7lu7jc().s[10]++;
    localStorage.setItem('state', 'default');
    const title = (cov_1d9v7lu7jc().s[11]++, document.getElementById('select-focus'));
    cov_1d9v7lu7jc().s[12]++;

    if (title.innerHTML === 'All tasks complete!') {
      cov_1d9v7lu7jc().b[1][0]++;
      cov_1d9v7lu7jc().s[13]++;
      title.innerHTML = '';
    } else {
      cov_1d9v7lu7jc().b[1][1]++;
    }
  }
}

const focusBtn = (cov_1d9v7lu7jc().s[14]++, document.getElementById('focus-button'));
cov_1d9v7lu7jc().s[15]++;
focusBtn.addEventListener('click', toggleState);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvY3VzTW9kZS5qcyJdLCJuYW1lcyI6WyJ0b2dnbGVTdGF0ZSIsInBvcFVwQnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRhc2tMaXN0RGl2IiwicG9tb0RpdiIsImZvY3VzVGFzayIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwidGl0bGUiLCJpbm5lckhUTUwiLCJmb2N1c0J0biIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWixTQUFTQSxXQUFULEdBQXVCO0FBQUE7QUFDbkI7QUFDQSxRQUFNQyxRQUFRLDZCQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBSCxDQUFkO0FBQ0EsUUFBTUMsV0FBVyw2QkFBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQUgsQ0FBakI7QUFDQSxRQUFNRSxPQUFPLDZCQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQUgsQ0FBYjtBQUNBLFFBQU1HLFNBQVMsNkJBQUdKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFILENBQWY7QUFMbUI7QUFNbkJGLEVBQUFBLFFBQVEsQ0FBQ00sU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsT0FBMUI7QUFObUI7QUFPbkJKLEVBQUFBLFdBQVcsQ0FBQ0csU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkIsT0FBN0I7QUFQbUI7QUFRbkJILEVBQUFBLE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsT0FBekI7QUFSbUI7QUFTbkJGLEVBQUFBLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsTUFBcEIsQ0FBMkIsT0FBM0I7QUFUbUI7O0FBVW5CLE1BQUlDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixNQUFrQyxTQUF0QyxFQUFpRDtBQUFBO0FBQUE7QUFDN0NELElBQUFBLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixPQUFyQixFQUE4QixPQUE5QjtBQUNILEdBRkQsTUFHSztBQUFBO0FBQUE7QUFDREYsSUFBQUEsWUFBWSxDQUFDRSxPQUFiLENBQXFCLE9BQXJCLEVBQThCLFNBQTlCO0FBQ0EsVUFBTUMsS0FBSyw4QkFBR1YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQUgsQ0FBWDtBQUZDOztBQUdELFFBQUlTLEtBQUssQ0FBQ0MsU0FBTixLQUFvQixxQkFBeEIsRUFBK0M7QUFBQTtBQUFBO0FBQzNDRCxNQUFBQSxLQUFLLENBQUNDLFNBQU4sR0FBa0IsRUFBbEI7QUFDSCxLQUZEO0FBQUE7QUFBQTtBQUdIO0FBQ0o7O0FBQ0QsTUFBTUMsUUFBUSw4QkFBR1osUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQUgsQ0FBZDs7QUFDQVcsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQ2YsV0FBbkMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB0b2dnbGVTdGF0ZSgpIHtcclxuICAgIC8vIGVsZW1lbnRzIC0tIHBvcHVwIGJ1dHRvbiwgdGFzayBsaXN0IGRpdiwgcG9tb2Rvcm8gdGltZXIgZGl2LCBmb2N1cyB0YXNrXHJcbiAgICBjb25zdCBwb3BVcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cC1idXR0b24nKTtcclxuICAgIGNvbnN0IHRhc2tMaXN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpO1xyXG4gICAgY29uc3QgcG9tb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb21vZG9yby10aW1lcicpOyBcclxuICAgIGNvbnN0IGZvY3VzVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2N1cy10YXNrJyk7XHJcbiAgICBwb3BVcEJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdzdGF0ZScpO1xyXG4gICAgdGFza0xpc3REaXYuY2xhc3NMaXN0LnRvZ2dsZSgnc3RhdGUnKTtcclxuICAgIHBvbW9EaXYuY2xhc3NMaXN0LnRvZ2dsZSgnc3RhdGUnKTtcclxuICAgIGZvY3VzVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdzdGF0ZScpO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGF0ZScpID09PSAnZGVmYXVsdCcpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RhdGUnLCAnZm9jdXMnKTsgIFxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0YXRlJywgJ2RlZmF1bHQnKTsgIFxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1mb2N1cycpO1xyXG4gICAgICAgIGlmICh0aXRsZS5pbm5lckhUTUwgPT09ICdBbGwgdGFza3MgY29tcGxldGUhJykge1xyXG4gICAgICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuY29uc3QgZm9jdXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9jdXMtYnV0dG9uJyk7XHJcbmZvY3VzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU3RhdGUpOyJdfQ==