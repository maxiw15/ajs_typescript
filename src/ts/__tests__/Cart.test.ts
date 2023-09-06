import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('add new Book, MusicALbum, Movie -> success', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1002, "Avengers",100, 2012, "USA", "Avenger Assemble!", ["fantastick"], "137 мин."));

  expect(cart.items.length).toBe(3);
});

test('get total', () => {
    const cart = new Cart();
    const book1 = new Book(1, 'book1', 'author1', 33, 100);
    const book2 = new Book(2, 'book2', 'author2', 77, 90);
    const book3 = new Book(3, 'book3', 'author3', 100, 80);
    cart.add(book1);
    cart.add(book2);
    cart.add(book3);
    expect(cart.getTotalCost()).toBe(210);
});

test('get discount', () => {
    const cart = new Cart();
    const book1 = new Book(1, 'book1', 'author1', 23, 100);
    const book2 = new Book(2, 'book2', 'author2', 77, 90);
    const book3 = new Book(3, 'book3', 'author3', 100, 80);
    cart.add(book1);
    cart.add(book2);
    cart.add(book3);
    expect(cart.getDiscountedTotalCost(0.10)).toBe(180);
});

test('RemoveItemById', () => {
    const cart = new Cart();
    const book1 = new Book(1, 'book1', 'author1', 23, 100);
    const book2 = new Book(2, 'book2', 'author2', 77, 90);
    const book3 = new Book(3, 'book3', 'author3', 100, 80);
    cart.add(book1);
    cart.add(book2);
    cart.add(book3);
    cart.removeItemById(3);
    expect(cart.items.length).toBe(2);
});
