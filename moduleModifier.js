const fs = require("fs");

const modifier = {
  update: {},
  get: (id) => {
    fs.readFile("hw1/tasks.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const jsonFile = JSON.parse(data);
        console.log(jsonFile[id - 1]);
      }
    });
  },

  add: (obj) => {
    fs.readFile("hw1/tasks.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let jsonFile = JSON.parse(data);
        const newJsonFile = [...jsonFile, obj];

        fs.writeFile("hw1/tasks.json", JSON.stringify(newJsonFile), (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
  },

  delete: (id) => {
    fs.readFile("hw1/tasks.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let jsonFile = JSON.parse(data);
        jsonFile = jsonFile.filter((task) => task.id != id);
        const newJsonFile = [...jsonFile];

        fs.writeFile("hw1/tasks.json", JSON.stringify(newJsonFile), (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
  },
};

modifier.add({ id: 4, title: "new added", status: "done" });
modifier.get(4);
