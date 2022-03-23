const taskController = require('../src/controller/task.controller');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const res = await taskController.getTasks();
    context.res = {
        status: 200,
        body: res,
        headers: {
            'Content-Type': 'application/json'
        }
    };
};