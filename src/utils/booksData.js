const Books=[
  {
    "id": 1,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "ratings":3.8,
    "publication_year": 1960,
    "categories": "Fiction",
    "description": "A classic novel depicting racial injustice in the American South.",
    "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg"
  },
  {
    "id": 2,
    "title": "1984",
    "author": "George Orwell",
    "ratings":3.5,
    "publication_year": 1949,
    "categories": "Fiction",
    "description": "A dystopian novel portraying a totalitarian society.",
    "cover_image": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/b468d093312907.5e6139cf2ab03.png"
  },
  {
    "id": 3,
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "ratings":4.3,
    "publication_year": 1813,
    "categories":
      "Romance",
    "description": "A classic novel exploring themes of love, marriage, and social norms.",
    "cover_image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/f/s/1/pride-prejudice-original-imagy32ephewfga2.jpeg?q=90&crop=false"
  },
  {
    "id": 4,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "ratings":4.4,
    "publication_year": 1925,
    "categories":
      "Fiction",
    "description": "A tale of the American Dream, wealth, and love during the Roaring Twenties.",
    "cover_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsgSqKPB50EhSK6kn1JjI40e2hbfNApW_XOQ&s"
  },
  {
    "id": 5,
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "ratings":4.1,
    "publication_year": 1851,
    "categories": 
      "Adventure",
    "description": "The epic tale of Captain Ahab's obsession with the white whale.",
    "cover_image": "https://m.media-amazon.com/images/I/71K4OH9CqOL._UF1000,1000_QL80_.jpg"
  },
  {
    "id": 6,
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "ratings":4.1,
    "publication_year": 1954,
    "categories":
      "Fantasy",
    "description": "An epic fantasy saga about the quest to destroy the One Ring.",
    "cover_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjvtARVQAFZvjgby4i1ev7I2h0OgHcG8YoQ&s"
  },
  {
    "id": 7,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "ratings":4.6,
    "publication_year": 1951,
    "categories":
      "Fiction",
    "description": "A classic coming-of-age novel following Holden Caulfield's journey.",
    "cover_image": "https://m.media-amazon.com/images/I/7108sdEUEGL.jpg"
  },
  {
    "id": 8,
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "ratings":4.3,
    "publication_year": 1937,
    "categories":
      "Fantasy",
    "description": "The prequel to The Lord of the Rings, following Bilbo Baggins' journey.",
    "cover_image": "https://upload.wikimedia.org/wikipedia/en/a/a9/The_Hobbit_trilogy_dvd_cover.jpg"
  },
  {
    "id": 9,
    "title": "One Hundred Years of Solitude",
    "author": "Gabriel Garcia Marquez",
    "ratings":4.8,
    "publication_year": 1967,
    "categories":
      "Fiction",
    "description": "A multi-generational saga of the Buendía family in the fictional town of Macondo.",
    "cover_image": "https://m.media-amazon.com/images/M/MV5BMjFjNTdiMmQtZjQ5Yi00MWMzLWJjMWMtNmI1ZTgzYmE5NjNiXkEyXkFqcGc@._V1_.jpg"
  },
  {
    "id": 10,
    "title": "War and Peace",
    "author": "Leo Tolstoy",
    "ratings":4.3,
    "publication_year": 1869,
    "categories":
      "Fiction",
    "description": "A monumental work depicting the events of Russian society during the Napoleonic era.",
    "cover_image": "https://m.media-amazon.com/images/I/91teiIZ5vwL._UF1000,1000_QL80_.jpg"
  },
  {
    "id": 11,
    "title": "The Odyssey",
    "author": "Homer",
    "ratings":3.9,
    "publication_year": "8th century BCE",
    "categories": "Mythology"
    ,
    "description": "An ancient Greek epic poem recounting Odysseus' ten-year journey home after the Trojan War.",
    "cover_image": "https://m.media-amazon.com/images/M/MV5BN2M2MTkwNTEtZTU1Mi00YmVmLTg4YjgtOTM5MTk4Y2Q5OTgwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    "id": 12,
    "title": "The Divine Comedy",
    "author": "Dante Alighieri",
    "ratings":4.6,
    "publication_year": "1320",
    "categories": 
      "Adventure",
    "description": "An epic poem that follows the journey of the soul through Hell, Purgatory, and Heaven.",
    "cover_image": "https://cdn.kobo.com/book-images/6e5d9a87-148d-4846-aecb-061f0a0bcf14/1200/1200/False/the-divine-comedy-51.jpg"
  },
  {
    "id": 13,
    "title": "The Brothers Karamazov",
    "author": "Fyodor Dostoevsky",
    "ratings":4.3,
    "publication_year": 1880,
    "categories":
      "Fiction",
    "description": "A complex novel exploring themes of spirituality, morality, and human nature.",
    "cover_image": "https://m.media-amazon.com/images/I/71OZJsgZzQL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "id": 14,
    "title": "Crime and Punishment",
    "author": "Fyodor Dostoevsky",
    "ratings":4.5,
    "publication_year": 1866,
    "categories":"Fiction",
    "description": "A psychological thriller revolving around guilt, conscience, and redemption.",
    "cover_image": "https://m.media-amazon.com/images/I/71O2XIytdqL.jpg"
  },
  {
    "id": 15,
    "title": "The Picture of Dorian Gray",
    "author": "Oscar Wilde",
    "ratings":3.2,
    "publication_year": 1890,
    "categories": 
      "Fiction",
    "description": "A novel about a man whose portrait ages while he retains his youth and beauty.",
    "cover_image": "https://m.media-amazon.com/images/M/MV5BMTY5ODc1NjU5N15BMl5BanBnXkFtZTcwMTUyNDg3Mg@@._V1_FMjpg_UX1000_.jpg"
  },
  {
    "id": 16,
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "ratings":3.8,
    "publication_year": 1932,
    "categories":
      "Science Fiction",
    "description": "A dystopian vision of a future society obsessed with pleasure and conformity.",
    "cover_image": "https://booksandyou.in/cdn/shop/files/BraveNewWorld_1.webp?v=1714499076"
  },
  {
    "id": 17,
    "title": "The Count of Monte Cristo",
    "author": "Alexandre Dumas",
    "ratings":4.1,
    "publication_year": 1844,
    "categories":
      "Adventure",
    "description": "An adventure novel of revenge, love, and redemption set in the early 19th century.",
    "cover_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rIMUjpADTbx-My84axdkfp3EXIePi0pvyw&s"
  },
  {
    "id": 18,
    "title": "Anna Karenina",
    "author": "Leo Tolstoy",
    "ratings":3.6,
    "publication_year": 1877,
    "categories": 
      "Fantasy",
    "description": "A tragic love story set against the backdrop of Russian high society.",
    "cover_image": "https://m.media-amazon.com/images/M/MV5BMTU0NDgxNDg0NV5BMl5BanBnXkFtZTcwMjE4MzkwOA@@._V1_FMjpg_UX1000_.jpg"
  },
  {
    "id": 19,
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "ratings":3.9,
    "publication_year": 1988,
    "categories": 
      "Fiction",
    "description": "A philosophical novel about a shepherd boy's journey to find his personal legend.",
    "cover_image": "https://m.media-amazon.com/images/I/81UGPuNl7kL._UF1000,1000_QL80_.jpg"
  },
  {
    "id": 20,
    "title": "The Adventures of Huckleberry Finn",
    "author": "Mark Twain",
    "ratings":3.5,
    "publication_year": 1884,
    "categories": 
      "Adventure",
    "description": "A satirical novel following Huck Finn's journey down the Mississippi River.",
    "cover_image": "https://m.media-amazon.com/images/I/91sBZnKzEfL.jpg"
  },
  {
    "id": 21,
    "title": "Dracula",
    "author": "Bram Stoker",
    "ratings":3.9,
    "publication_year": 1897,
    "categories":
      "Horror",
    "description": "A Gothic horror novel about the vampire Count Dracula's attempt to move to England.",
    "cover_image": "https://m.media-amazon.com/images/M/MV5BZGVlYTdhYzQtYWVmMi00OTJmLTkyYmYtMWRiMTgyMmY2MjEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  }, {
    "id": 22,
    "title": "The Stand",
    "author": "Stephen King",
    "ratings":3.7,
    "publication_year": 1978,
    "categories":
      "Horror",
    "description": "A post-apocalyptic horror novel about a deadly pandemic and its aftermath.",
    "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/The_Stand_%281978%29_front_cover%2C_first_edition.png/640px-The_Stand_%281978%29_front_cover%2C_first_edition.png"
  },]

  export default Books;