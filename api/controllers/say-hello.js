
module.exports = {
  friendlyName: 'Say hello to the people',
  description: 'yeah',
  inputs: {
    name: {
      description: 'the persons name',
      example: 'Bob'
    }
  },
  exits: {
    success: {
      description: 'we did it'
    }
  },
  fn: async function (inputs) {
    return {success: 'Hello ' + inputs.name};
  }
};
