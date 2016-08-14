# rethink-db

* POC for rethink db on node to create a chat application.

* Before running the node project -
  * Install node dependencies.
  * Install `rethinkdb` globally (`npm install rethinkdb -g).
  * Run `rethinkdb` from console (more info https://www.rethinkdb.com).
  * Open `rethinkdb administrator console` (default URL - `http://localhost:8080/`).
  * Create `chatsapp` database with `messages` table in it.
  
* Use `http://localhost:3000/chat/add POST API` to insert records.

* Use `http://localhost:3000/chat/ GET API` to retrieve inserted records.
  
