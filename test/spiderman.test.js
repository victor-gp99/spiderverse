
const spiderman = require('./../app/spiderman')

describe("Unit test for spiderman class", () => {
    test('1) Create an spiderman object', () => {
      
        const spidey = new spiderman("Peter Sam Raimy", 29, "Tobey Maguare", 3 , "Sony Pictures");

      expect(spidey.nombre).toBe("Peter Sam Raimy");
      expect(spidey.edad).toBe(29);
      expect(spidey.actor).toBe("Tobey Maguare");
      expect(spidey.num_peliculas).toBe(3);
      expect(spidey.estudio_cine).toBe("Sony Pictures");

    });

    test('2) Use method getinfo()', () => {
      
        const spidey2 = new spiderman("Peter Jon Watts", 25, "Tom Holland", 3 , "Sony Pictures & Marvel");
        
        expect(spidey2.getInfo()).toBe("Hey, I'm Tom Holland from Sony Pictures & Marvel");
    
    });
  })