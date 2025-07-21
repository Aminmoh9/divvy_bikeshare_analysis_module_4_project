fetch('story.json')
  .then(res => res.json())
  .then(data => {
    // Render story questions and insights
    const container = document.getElementById('storyContainer');
    container.innerHTML = ''; // Clear loading text
    data.story.forEach(item => {
      const qDiv = document.createElement('div');
      qDiv.className = 'question';
      qDiv.textContent = '❓ ' + item.question;
      container.appendChild(qDiv);

      const iDiv = document.createElement('div');
      iDiv.className = 'insight';
      iDiv.textContent = '💡 ' + item.insight;
      container.appendChild(iDiv);
    });

    // Embed Tableau dashboard
    const tableauContainer = document.getElementById('tableauViz');
    const options = {
      hideTabs: data.tableau.hideTabs,
      width: tableauContainer.offsetWidth,
      height: data.tableau.height,
      onFirstInteractive: () => console.log('Tableau Viz loaded')
    };
    new tableau.Viz(tableauContainer, data.tableau.url, options);
  })
  .catch(err => {
    const container = document.getElementById('storyContainer');
    container.textContent = 'Failed to load story content.';
    console.error(err);
  });
