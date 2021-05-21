// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020101010101010101010101010101020201010101010101010101010101040202010101010101010101010101010102020101010101010101010101010101020201010101010101010101010101010202010101010101010101010101010102020101010101010101010101010101020201010101010101010101010101010202010101010101010102010202020202020101010101010101020101010101020201010101010101010201010101010202020202020202020202010101010102020303030303030303010101010101020203030303030303030101010101010202020202020202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . 2 . 2 2 2 2 2 
2 . . . . . . . . 2 . . . . . 2 
2 . . . . . . . . 2 . . . . . 2 
2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,myTiles.tile1,myTiles.tile3,myTiles.tile2], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`10001000090909090909090909090909090909090902080808080808080808080808010909070a0a0a0a0a0a0a0a0a0a0a0b040909070a0a0a0a0a0a0a0a0a0a0a0a040909070a0a0a0a0a0a0a0a0a0a0a0a040909070a0a0a0a0a0a0a0a0a0a0a0a040909070a0a0a0a0a0a0a0a0a0a0a0a040909070a0a0a0a0a0a0a0a0a0a0a0a040909070a0a0a0a0a0a0a0a0a0a0a0a040909070a0a0a0a0a0a0a0a0a0a0a0a040909070a0a0a0a0a0a0a0a0a0a0a0a040909070a0a0a0a0a0a0a0a0a0a0a0a040909070a0a0a0a0a0a0a0a0a0a0a0a040909070a0a0a0a0a0a0a0a0a0a0a0a04090903060606060606060606060606050909090909090909090909090909090909`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath3,sprites.castle.tilePath1,sprites.castle.tilePath7,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tileGrass1,sprites.castle.tilePath5,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "chestyes":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
