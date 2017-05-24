using Handlebars framework with jQuery to update the html of a simple To Do list webpage via a template.
demonstrates use of Seperation of Concerns.

// When the user submits the form, do:
  // Prevents the default action
  // Creates an object data; 
  			// item: the value the user entered into the #item input (hint: use the val() method)
  // Get HTML from #grocery-template, store it in var source
  // Use Handlebars.compile() to compile source template and store in var template
  // Use template() to add data to the template. Store in var newListItemHTML
  // Append newListItemHTML to groceries list
