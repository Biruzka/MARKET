describe("test test", function() {
    it('should pass', function() {
        expect(true).toEqual(true);
    });
});


//Check types

describe("InMemoryStorage", function() {
    it('should create InMemoryStorage', function() {
        expect(typeof storage).toEqual("object");
    })
});

describe("InMemoryStorage", function() {
    it('should create InMemoryStorage', function() {
        expect(typeof shop).toEqual("object");
    })
});

describe("InMemoryStorage", function() {
    it('should describe product at right type', function() {
        expect(typeof product).toEqual("object");
    })
});

                                        //Metods of InMemoryStorage

//Shop

describe("InMemoryStorage", function() {
    it('should get shop by id', function() {
        expect(storage.getShopById(1).name).toEqual("Уюттера");
    })
});

describe("InMemoryStorage", function() {
    it('should get id by name of shop', function() {
        expect(typeof storage.getShopByName("Уюттера")).toEqual("object");
    })
});

describe("InMemoryStorage", function() {
    it('should get shop by id', function() {
        expect(storage.getShopById(2)).toEqual(undefined);
    })
});

//Proooduct










