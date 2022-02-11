# Todo App using Redux in React

Build a simple todo app using Redux

- [] add todo
- [] delete todo
- [] update todo
- [] filter todo

## Components

- TodoList
- TodoItem

I. create a reducer

- create initial state
- create todosReducer function that determines what the new state

II. create a redux store

- import todosReducer in store/index.js files
- create store in const store with méthod redux createStore with todosReducer

III. wrap the main component with Provider (=> react-redux)
IV. use high order component / hooks to get store in each component

- select and transform state from redux store

src
└── store
├── index.js
├── actions
│ ├──
│ ├──
│ ├──
│ ├──
│ └──
└── reducers
│ ├──
│ ├──
│ ├──
│ ├──
│ └──
└── selectors
│ ├──
│ ├──
│ ├──
│ ├──
│ └──
└── components

# ADD NEW ACTIONS STEP

I. create action in reducer
II. create action in actions files
III. call action in component store with useDispatch()
IV. use action in component children

## Create Filter reducer

I. create reducer with inital state null
