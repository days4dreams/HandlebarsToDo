// When the user submits the form, do:
	// Prevents the default action
  // Creates an object data; 
  			// item: the value the user entered into the #item input (hint: use the val() method)
  // Get HTML from #grocery-template, store it in var source
  // Use Handlebars.compile() to compile source template and store in var template
  // Use template() to add data to the template. Store in var newListItemHTML
  // Append newListItemHTML to groceries list
  
  $('#submitBtn').on('click', function(e){
    e.preventDefault();

    var source = $('#grocery-template').html();

    var template = Handlebars.compile(source);

    var data = {newItem: $('#item').val()};

    var newListItemHTML = template(data);

    $('#groceries').append(newListItemHTML);

  });
