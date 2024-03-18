<div class="grid">
  <div>
    <h2>Articles:</h2>
    <article>
      <button class="outline secondary">Delete Article</button>
      <a href="/" role="button" class="outline contrast" style="width: 100%;">Edit Article</a>
    </article>
  </div>
  <form action="?/createEvent" method="POST" style="display: flex; flex-direction: column;">
    <h3>New Article</h3>
    <label for="title" style="background-color: lightblue; padding: 5px;">Title</label>
    <input type="text" id="title" name="title" style="margin-bottom: 10px; padding: 5px;" />
    <label for="start" style="background-color: lightgreen; padding: 5px;">Start Date</label>
    <input type="text" id="start" name="start" style="margin-bottom: 10px; padding: 5px;" />
    <label for="end" style="background-color: lightcoral; padding: 5px;">End Date</label>
    <input type="text" id="end" name="end" style="margin-bottom: 10px; padding: 5px;" />
    <label for="scheduleDate" style="background-color: lightgoldenrodyellow; padding: 5px;">Schedule Date</label>
    <input type="text" id="scheduleDate" name="scheduleDate" style="margin-bottom: 10px; padding: 5px;" />
    <label for="createdAt" style="background-color: lightsalmon; padding: 5px;">Created At</label>
    <input type="text" id="createdAt" name="createdAt" style="margin-bottom: 10px; padding: 5px;" />
    <label for="updatedAt" style="background-color: lightseagreen; padding: 5px;">Updated At</label>
    <input type="text" id="updatedAt" name="updatedAt" style="margin-bottom: 10px; padding: 5px;" />
    <button type="submit" style="background-color: lightgray; padding: 10px;">Add Article</button>
  </form>
</div>
