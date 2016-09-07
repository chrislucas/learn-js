<?php  
	$array = array('a' => 1, 'b' => 2, 'c' => 3, 'test' => array(1,2,3,4,5));

	var_dump(count($array, COUNT_RECURSIVE));

	var_dump(get_defined_vars('array')); 
	#var_dump(get_defined_functions()); 

?>
