# React + NodeJs game control application, powered by WebSocket

Solution: There are 2 main routes created on the frontend: Controller and Square. The user, by pressing a button on the controller, sends the direction in which the square should move. The server receives this message, calls the move function on the Square object, and then sends the current position of the squares to all observers.
