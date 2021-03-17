function cov_1d9v7lu7jc() {
  var path = "D:\\\u5B66\u4E60\\21WI\\CSE110\\cse110-w21-group13\\source\\src\\scripts\\FocusMode.js";
  var hash = "5adf6df15b93ddffc4bbc38dc30149ce04db67bb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\\u5B66\u4E60\\21WI\\CSE110\\cse110-w21-group13\\source\\src\\scripts\\FocusMode.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 24
        },
        end: {
          line: 4,
          column: 60
        }
      },
      "1": {
        start: {
          line: 5,
          column: 20
        },
        end: {
          line: 5,
          column: 61
        }
      },
      "2": {
        start: {
          line: 6,
          column: 22
        },
        end: {
          line: 6,
          column: 59
        }
      },
      "3": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 42
        }
      },
      "4": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 38
        }
      },
      "5": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 40
        }
      },
      "6": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 20,
          column: 5
        }
      },
      "7": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 47
        }
      },
      "8": {
        start: {
          line: 15,
          column: 8
        },
        end: {
          line: 15,
          column: 49
        }
      },
      "9": {
        start: {
          line: 16,
          column: 22
        },
        end: {
          line: 16,
          column: 61
        }
      },
      "10": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 19,
          column: 9
        }
      },
      "11": {
        start: {
          line: 18,
          column: 12
        },
        end: {
          line: 18,
          column: 33
        }
      },
      "12": {
        start: {
          line: 22,
          column: 17
        },
        end: {
          line: 22,
          column: 56
        }
      },
      "13": {
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
      "13": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5adf6df15b93ddffc4bbc38dc30149ce04db67bb"
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
  // const popUpBtn = document.getElementById('popup-button');
  const taskListDiv = (cov_1d9v7lu7jc().s[0]++, document.getElementById('task-list'));
  const pomoDiv = (cov_1d9v7lu7jc().s[1]++, document.getElementById('pomodoro-timer'));
  const focusTask = (cov_1d9v7lu7jc().s[2]++, document.getElementById('focus-task')); // popUpBtn.classList.toggle('state');

  cov_1d9v7lu7jc().s[3]++;
  taskListDiv.classList.toggle('state');
  cov_1d9v7lu7jc().s[4]++;
  pomoDiv.classList.toggle('state');
  cov_1d9v7lu7jc().s[5]++;
  focusTask.classList.toggle('state');
  cov_1d9v7lu7jc().s[6]++;

  if (localStorage.getItem('state') === 'default') {
    cov_1d9v7lu7jc().b[0][0]++;
    cov_1d9v7lu7jc().s[7]++;
    localStorage.setItem('state', 'focus');
  } else {
    cov_1d9v7lu7jc().b[0][1]++;
    cov_1d9v7lu7jc().s[8]++;
    localStorage.setItem('state', 'default');
    const title = (cov_1d9v7lu7jc().s[9]++, document.getElementById('select-focus'));
    cov_1d9v7lu7jc().s[10]++;

    if (title.innerHTML === 'All tasks complete!') {
      cov_1d9v7lu7jc().b[1][0]++;
      cov_1d9v7lu7jc().s[11]++;
      title.innerHTML = '';
    } else {
      cov_1d9v7lu7jc().b[1][1]++;
    }
  }
}

const focusBtn = (cov_1d9v7lu7jc().s[12]++, document.getElementById('focus-button'));
cov_1d9v7lu7jc().s[13]++;
focusBtn.addEventListener('click', toggleState);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvY3VzTW9kZS5qcyJdLCJuYW1lcyI6WyJ0b2dnbGVTdGF0ZSIsInRhc2tMaXN0RGl2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBvbW9EaXYiLCJmb2N1c1Rhc2siLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInRpdGxlIiwiaW5uZXJIVE1MIiwiZm9jdXNCdG4iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWixTQUFTQSxXQUFULEdBQXVCO0FBQUE7QUFDbkI7QUFDQTtBQUNBLFFBQU1DLFdBQVcsNkJBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFILENBQWpCO0FBQ0EsUUFBTUMsT0FBTyw2QkFBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUFILENBQWI7QUFDQSxRQUFNRSxTQUFTLDZCQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBSCxDQUFmLENBTG1CLENBTW5COztBQU5tQjtBQU9uQkYsRUFBQUEsV0FBVyxDQUFDSyxTQUFaLENBQXNCQyxNQUF0QixDQUE2QixPQUE3QjtBQVBtQjtBQVFuQkgsRUFBQUEsT0FBTyxDQUFDRSxTQUFSLENBQWtCQyxNQUFsQixDQUF5QixPQUF6QjtBQVJtQjtBQVNuQkYsRUFBQUEsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxNQUFwQixDQUEyQixPQUEzQjtBQVRtQjs7QUFVbkIsTUFBSUMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLE1BQWtDLFNBQXRDLEVBQWlEO0FBQUE7QUFBQTtBQUM3Q0QsSUFBQUEsWUFBWSxDQUFDRSxPQUFiLENBQXFCLE9BQXJCLEVBQThCLE9BQTlCO0FBQ0gsR0FGRCxNQUdLO0FBQUE7QUFBQTtBQUNERixJQUFBQSxZQUFZLENBQUNFLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEIsU0FBOUI7QUFDQSxVQUFNQyxLQUFLLDZCQUFHVCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBSCxDQUFYO0FBRkM7O0FBR0QsUUFBSVEsS0FBSyxDQUFDQyxTQUFOLEtBQW9CLHFCQUF4QixFQUErQztBQUFBO0FBQUE7QUFDM0NELE1BQUFBLEtBQUssQ0FBQ0MsU0FBTixHQUFrQixFQUFsQjtBQUNILEtBRkQ7QUFBQTtBQUFBO0FBR0g7QUFDSjs7QUFDRCxNQUFNQyxRQUFRLDhCQUFHWCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBSCxDQUFkOztBQUNBVSxRQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DZCxXQUFuQyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHRvZ2dsZVN0YXRlKCkge1xyXG4gICAgLy8gZWxlbWVudHMgLS0gcG9wdXAgYnV0dG9uLCB0YXNrIGxpc3QgZGl2LCBwb21vZG9ybyB0aW1lciBkaXYsIGZvY3VzIHRhc2tcclxuICAgIC8vIGNvbnN0IHBvcFVwQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgdGFza0xpc3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1saXN0Jyk7XHJcbiAgICBjb25zdCBwb21vRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvbW9kb3JvLXRpbWVyJyk7IFxyXG4gICAgY29uc3QgZm9jdXNUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvY3VzLXRhc2snKTtcclxuICAgIC8vIHBvcFVwQnRuLmNsYXNzTGlzdC50b2dnbGUoJ3N0YXRlJyk7XHJcbiAgICB0YXNrTGlzdERpdi5jbGFzc0xpc3QudG9nZ2xlKCdzdGF0ZScpO1xyXG4gICAgcG9tb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKCdzdGF0ZScpO1xyXG4gICAgZm9jdXNUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ3N0YXRlJyk7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXRlJykgPT09ICdkZWZhdWx0Jykge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGF0ZScsICdmb2N1cycpOyAgXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RhdGUnLCAnZGVmYXVsdCcpOyAgXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWZvY3VzJyk7XHJcbiAgICAgICAgaWYgKHRpdGxlLmlubmVySFRNTCA9PT0gJ0FsbCB0YXNrcyBjb21wbGV0ZSEnKSB7XHJcbiAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5jb25zdCBmb2N1c0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2N1cy1idXR0b24nKTtcclxuZm9jdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVTdGF0ZSk7Il19