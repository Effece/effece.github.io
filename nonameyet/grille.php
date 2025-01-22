<?php

$itemsPos = array();
$itemsCon = array();

$results = $mysqli->query('SELECT * FROM jeu');

while ($row = $results->fetch_assoc()) {
	array_push($itemsPos, $row['pos']);
	array_push($itemsCon, $row['cont']);
}

$tab = '<table><tbody><tr>';
$cls = '';
$position = 0;
for ($i = 0; $i <= 44; $i++) {
	if ($i % 10 > 4) continue;
	if (in_array($i, $itemsPos)) $cls = $itemsCon[array_search($i, $itemsPos)];
	$position = $i;
	if ($position < 10) $position = '0' . $i;
	$tab = $tab . '<td><button class = " ' . $cls . ' case " id = "' . $position . '" onclick = "input(this)"></button></td>';
	$cls = '';
	if ($i % 10 == 4) $tab = $tab . '</tr><tr>';
}
$tab = $tab . '</tr></tbody></table>';
echo $tab;

$results->free();

?>