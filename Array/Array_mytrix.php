<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Array</title>
    <script>
    //Array.matrix
    Array.matrix = function(m, n, initial){
        var a, i, j, mat = [];
        for(i=0; i<m; i++){
            a = [];
            for(j=0; j<n; j++){
                a[j] = initial;
            }
            mat[i] = a;
        }
        return mat;
    };
    
    var myMatrix = Array.matrix(4, 4, 0);
    console.log(myMatrix);
    
    //Array.identity
    Array.identity = function(n){
        var i, mat = Array.matrix(n, n, 0);
        for(i=0; i<n; i++){
            mat[i][i] = 1;
        }
        return mat;
    };
    
    var myIdentity = Array.identity(4);
    console.log(myIdentity);
    </script>
</head>
<body>
    
</body>
</html>