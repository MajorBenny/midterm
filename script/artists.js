const context = {
    artistsList: [
      {
        image: "asset/jm.png",
        name: 'Johan Maeda',
        description: 'John Maeda (born 1966) is an American executive, designer, technologist. His work explores the area where business, design, and technology merge to make space for the "humanist technologist." He is Global Head, Computational Design and Inclusion at Automattic where he seeks to address the diversity gap in tech by exploring how inclusion can be a key ingredient for success in the technology industry.',
        more: 'more'
      },
      {
        image: "asset/bf.png",
        name: 'Ben Fry',
        description: 'Benjamin Fry (born 1975) is an American expert in data visualization. He is a principal of Fathom, a design and software consultancy in Boston, Massachusetts.[2][3] He is also a co-developer of Processing, an open-source programming language and integrated development environment (IDE) built for the electronic arts and visual design communities with the purpose of teaching the basics of computer programming in a visual context. The Processing design environment developed together with Casey Reas won a Golden Nica from the Prix Ars Electronica in 2005.',
        more: 'more'
      },
      {
        image: "asset/cr.png",
        name: 'Casey Reas',
        description: 'Casey Edwin Barker Reas (born 1972), also known as C. E. B. Reas or Casey Reas, is an American artist whose conceptual, procedural and minimal artworks explore ideas through the contemporary lens of software. Reas is perhaps best known for having created, with Ben Fry, the Processing programming language.',
        more: 'more'
      },
      {
        image: "asset/mc.png",
        name: 'Muriel Cooper',
        description: "Muriel Cooper (1925 – May 26, 1994) was a pioneering book designer, digital designer, researcher, and educator.[1] She was the longtime art director of the MIT Press, instilling a Bauhaus-influenced design style into its many publications. She moved on to become founder of MIT's Visible Language Workshop, and later became a co-founder of the MIT Media Lab.",
        more: 'more'
      }
    ]
  };
  
  const templateElement = document.getElementById("templateHB");
  const templateSource = templateElement.innerHTML;
  const template = Handlebars.compile(templateSource);
  const compiledHtml = template(context);
  document.getElementById('information').innerHTML = compiledHtml;
  
  