const I = actor();

export default homePage = {
    
    searchTextbox: '#twotabsearchtextbox',
    searchButton: 'input[type="submit"]',
  
    search(searchString = 'amazon echo') {
        I.fillField(this.searchTextbox, searchString);
        I.click(this.searchButton);
    },
  };
  