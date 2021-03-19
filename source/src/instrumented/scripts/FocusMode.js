function cov_26ckrmpig() {
  var path = "/Users/efeichen/Documents/Academics/CSE 110/cse110-w21-group13/source/src/scripts/FocusMode.js";
  var hash = "bdd8ae660c9c744acb18518c8d69c57b67236cd4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/efeichen/Documents/Academics/CSE 110/cse110-w21-group13/source/src/scripts/FocusMode.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 24
        },
        end: {
          line: 5,
          column: 60
        }
      },
      "1": {
        start: {
          line: 6,
          column: 20
        },
        end: {
          line: 6,
          column: 61
        }
      },
      "2": {
        start: {
          line: 7,
          column: 22
        },
        end: {
          line: 7,
          column: 59
        }
      },
      "3": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 42
        }
      },
      "4": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 38
        }
      },
      "5": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 40
        }
      },
      "6": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 20,
          column: 5
        }
      },
      "7": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
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
          line: 23,
          column: 17
        },
        end: {
          line: 23,
          column: 56
        }
      },
      "13": {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 48
        }
      }
    },
    fnMap: {
      "0": {
        name: "toggleState",
        decl: {
          start: {
            line: 2,
            column: 9
          },
          end: {
            line: 2,
            column: 20
          }
        },
        loc: {
          start: {
            line: 2,
            column: 23
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 2
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
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
            line: 12,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        }, {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        }],
        line: 12
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
    hash: "bdd8ae660c9c744acb18518c8d69c57b67236cd4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_26ckrmpig = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_26ckrmpig();

/** Toggle focus mode: remove task list component and only show the Pomodoro timer */
function toggleState() {
  cov_26ckrmpig().f[0]++;
  // elements -- popup button, task list div, pomodoro timer div, focus task
  // const popUpBtn = document.getElementById('popup-button');
  const taskListDiv = (cov_26ckrmpig().s[0]++, document.getElementById('task-list'));
  const pomoDiv = (cov_26ckrmpig().s[1]++, document.getElementById('pomodoro-timer'));
  const focusTask = (cov_26ckrmpig().s[2]++, document.getElementById('focus-task')); // popUpBtn.classList.toggle('state');

  cov_26ckrmpig().s[3]++;
  taskListDiv.classList.toggle('state');
  cov_26ckrmpig().s[4]++;
  pomoDiv.classList.toggle('state');
  cov_26ckrmpig().s[5]++;
  focusTask.classList.toggle('state');
  cov_26ckrmpig().s[6]++;

  if (localStorage.getItem('state') === 'default') {
    cov_26ckrmpig().b[0][0]++;
    cov_26ckrmpig().s[7]++;
    localStorage.setItem('state', 'focus');
  } else {
    cov_26ckrmpig().b[0][1]++;
    cov_26ckrmpig().s[8]++;
    localStorage.setItem('state', 'default');
    const title = (cov_26ckrmpig().s[9]++, document.getElementById('select-focus'));
    cov_26ckrmpig().s[10]++;

    if (title.innerHTML === 'All tasks complete!') {
      cov_26ckrmpig().b[1][0]++;
      cov_26ckrmpig().s[11]++;
      title.innerHTML = '';
    } else {
      cov_26ckrmpig().b[1][1]++;
    }
  }
}

const focusBtn = (cov_26ckrmpig().s[12]++, document.getElementById('focus-button'));
cov_26ckrmpig().s[13]++;
focusBtn.addEventListener('click', toggleState);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvY3VzTW9kZS5qcyJdLCJuYW1lcyI6WyJ0b2dnbGVTdGF0ZSIsInRhc2tMaXN0RGl2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBvbW9EaXYiLCJmb2N1c1Rhc2siLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInRpdGxlIiwiaW5uZXJIVE1MIiwiZm9jdXNCdG4iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWjtBQUNBLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTtBQUNuQjtBQUNBO0FBQ0EsUUFBTUMsV0FBVyw0QkFBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQUgsQ0FBakI7QUFDQSxRQUFNQyxPQUFPLDRCQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQUgsQ0FBYjtBQUNBLFFBQU1FLFNBQVMsNEJBQUdILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFILENBQWYsQ0FMbUIsQ0FNbkI7O0FBTm1CO0FBT25CRixFQUFBQSxXQUFXLENBQUNLLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCLE9BQTdCO0FBUG1CO0FBUW5CSCxFQUFBQSxPQUFPLENBQUNFLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLE9BQXpCO0FBUm1CO0FBU25CRixFQUFBQSxTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLE1BQXBCLENBQTJCLE9BQTNCO0FBVG1COztBQVVuQixNQUFJQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsTUFBa0MsU0FBdEMsRUFBaUQ7QUFBQTtBQUFBO0FBQzdDRCxJQUFBQSxZQUFZLENBQUNFLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEIsT0FBOUI7QUFDSCxHQUZELE1BRU87QUFBQTtBQUFBO0FBQ0hGLElBQUFBLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixPQUFyQixFQUE4QixTQUE5QjtBQUNBLFVBQU1DLEtBQUssNEJBQUdULFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUFILENBQVg7QUFGRzs7QUFHSCxRQUFJUSxLQUFLLENBQUNDLFNBQU4sS0FBb0IscUJBQXhCLEVBQStDO0FBQUE7QUFBQTtBQUMzQ0QsTUFBQUEsS0FBSyxDQUFDQyxTQUFOLEdBQWtCLEVBQWxCO0FBQ0gsS0FGRDtBQUFBO0FBQUE7QUFHSDtBQUNKOztBQUVELE1BQU1DLFFBQVEsNkJBQUdYLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUFILENBQWQ7O0FBQ0FVLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUNkLFdBQW5DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIFRvZ2dsZSBmb2N1cyBtb2RlOiByZW1vdmUgdGFzayBsaXN0IGNvbXBvbmVudCBhbmQgb25seSBzaG93IHRoZSBQb21vZG9ybyB0aW1lciAqL1xuZnVuY3Rpb24gdG9nZ2xlU3RhdGUoKSB7XG4gICAgLy8gZWxlbWVudHMgLS0gcG9wdXAgYnV0dG9uLCB0YXNrIGxpc3QgZGl2LCBwb21vZG9ybyB0aW1lciBkaXYsIGZvY3VzIHRhc2tcbiAgICAvLyBjb25zdCBwb3BVcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cC1idXR0b24nKTtcbiAgICBjb25zdCB0YXNrTGlzdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWxpc3QnKTtcbiAgICBjb25zdCBwb21vRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvbW9kb3JvLXRpbWVyJyk7XG4gICAgY29uc3QgZm9jdXNUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvY3VzLXRhc2snKTtcbiAgICAvLyBwb3BVcEJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdzdGF0ZScpO1xuICAgIHRhc2tMaXN0RGl2LmNsYXNzTGlzdC50b2dnbGUoJ3N0YXRlJyk7XG4gICAgcG9tb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKCdzdGF0ZScpO1xuICAgIGZvY3VzVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdzdGF0ZScpO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhdGUnKSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGF0ZScsICdmb2N1cycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGF0ZScsICdkZWZhdWx0Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1mb2N1cycpO1xuICAgICAgICBpZiAodGl0bGUuaW5uZXJIVE1MID09PSAnQWxsIHRhc2tzIGNvbXBsZXRlIScpIHtcbiAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBmb2N1c0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2N1cy1idXR0b24nKTtcbmZvY3VzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU3RhdGUpO1xuIl19