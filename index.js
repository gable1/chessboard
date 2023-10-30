<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Include the chess.js library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/chess.js/0.10.3/chess.js"></script>
    <!-- Include the chessboard.js library and CSS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/chessboard-js/1.0.0/chessboard-1.0.0.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/chessboard-js/1.0.0/chessboard-1.0.0.min.css" />
</head>
<body>
<div id="board" style="width: 400px"></div>

<script type="text/javascript">
    var board = ChessBoard('board', { position: 'start', draggable: true });
    var game = new Chess();
</script>
</body>
</html>
