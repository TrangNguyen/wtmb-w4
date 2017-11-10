# Whiteboard app with Express and Mongoose

Clone the repository:

```
git clone git@github.com:TrangNguyen/wtmb-w4.git
```

Enter the project folder and install dependencies:

```
cd wtmbjs-4
npm install
```

Run the project:

```
node index.js

```

----

## Homework 05

Check out the `homework-05` branch to see the whiteboard app WIP.

```
git checkout homework-05
```

And run the code again.

You can visit the following URLs;

| URL | Description
| --- | ---
| `http://localhost:3000` | Index page
| `http://localhost:3000/person` | People JSON
| `http://localhost:3000/person/all` | People list
| `http://localhost:3000/person/:personId` | Person detail page with `personId`
| `http://localhost:3000/board/:boardId`  | Board detail page with notes and collaborators.

`http://localhost:3000/person` also supports `POST` and `DELETE` actions to
create new records or delete given records.

POST `http://localhost:3000/person` create a new person.
If using axios in broswer's console.
```
axios.post('/person', { name: 'Your Name', title: 'Your job title'}).then(res => console.log(res.data))
```

POST `http://localhost:3000/board/` will create a board.
If using axios in broswer's console, _id can be taken from the person/all view.
```
axios.post('/board', { tilte: 'New board', author: {_id: '5a058c8b0fc1d72f4c674032'}}).then(res => console.log(res.data))
```

POST ` http://localhost:3000/board/:boardId/note` will create a note.
If using axios in broswer's console, _id can be taken from the person/all view.
```
axios.post('/board/2/note', { description: 'New note in board 2', author: {_id: '5a058c8b0fc1d72f4c674032'}}).then(res => console.log(res.data))
```

## Issues:
1. Currently, when create a board, the board is created but not added to the author's boards. The board model populate the 'Person' model as its author properly but not the otherway around.
