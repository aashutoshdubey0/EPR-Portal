<?php
session_start();

function generatePuzzle() {
  $num1 = rand(1, 10);
  $num2 = rand(1, 10);
  $operator = (rand(0, 1) == 0) ? '+' : '-';

  $_SESSION['puzzleNum1'] = $num1;
  $_SESSION['puzzleNum2'] = $num2;
  $_SESSION['puzzleOperator'] = $operator;

  return "$num1 $operator $num2";
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  $puzzle = generatePuzzle();
  echo $puzzle;
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $answer = $_POST['answer'];

  $num1 = $_SESSION['puzzleNum1'];
  $num2 = $_SESSION['puzzleNum2'];
  $operator = $_SESSION['puzzleOperator'];

  if ($operator === '+') {
    $expectedAnswer = $num1 + $num2;
  } else {
    $expectedAnswer = $num1 - $num2;
  }

  if ($answer == $expectedAnswer) {
    echo "success";
  } else {
    echo "error";
  }
}
?>
