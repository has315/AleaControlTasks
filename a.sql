SELECT `column`.*, `columntree`.*
FROM `column`, `columntree`, 
LEFT JOIN `document` ON `column`.ID = `document`.ColumnID