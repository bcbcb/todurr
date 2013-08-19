Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Template.hello.user = function(){
  return Meteor.user().username;
};

Template.hello.greeting = function () {
  return "Welcome ";
};

Template.box.events({
  'click .add': function(){
    var newItem = document.getElementById("new-item").value;
    Todos.insert({
      userid: Meteor.userId(),
      text: newItem,
      done: false
    });
    document.getElementById("new-item").value = '';
    document.getElementById("new-item").focus();
  },
  'keypress input#new-item': function(e){
    if(e.which === 13){
      var newItem = document.getElementById("new-item").value;
      Todos.insert({
        userid: Meteor.userId(),
        text: newItem,
        done: false
      });
      document.getElementById("new-item").value = '';
     }
   },
});

Template.todos.count = function(){
  return Todos.find().count();
};

Template.todos.items = function(){
  return Todos.find({userid: Meteor.userId(), done: false});
};
Template.todos.doneItems = function(){
  return Todos.find({userid: Meteor.userId(), done: true});
};



Template.todos.events({
  // Remove item
  'click .remove' : function(){
    Todos.remove(this._id);
  },

  //T oggle done or not done
  'click .done' : function(){
    if(this.done){
      Todos.update(this._id, {$set: {done: false}});
    } else {
      Todos.update(this._id, {$set: {done: true}});
    }
  }
});




///////////// TODOs


