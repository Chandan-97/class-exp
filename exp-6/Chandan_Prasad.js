window.onload = load();

function load(){
    var num = document.getElementById("input1");
    var lim = document.getElementById("input2");
    // num.value = 0;
    // lim.value = 0;

    num.placeholder = "Enter Number";
    lim.placeholder = "Enter Limit";

    var multiples = document.getElementById("mult_res");
    multiples.value = "No Result to Display";

    var primes = document.getElementById("prime_res");
    primes.value = "No Result to Display";
};

function setMult(x){
    var ident = document.getElementById("x_mult");
    var text = ident.textContent;
    ident.textContent = x;
}

function multiples(){
    var num = document.getElementById("input1");
    var lim = document.getElementById("input2");
    var mul = document.getElementById("mult_res");
    var x   = document.getElementById("x_mult");
    var num_val = num.value;
    var lim_val = lim.value;

    num.className = "input_area";
    lim.className = "input_area";

    if(num_val === "" && lim_val === ""){
        num.className += " error";
        num.placeholder = "Enter Some Value";

        lim.className += " error";
        lim.placeholder = "Enter Some Value";

        mul.value = "Invalid Input";

        x.textContent = "x";
        return;
    }

    if(num_val === ""){
        num.className += " error";
        num.placeholder = "Enter Some Value";
        mul.value = "Invalid Input";
        x.textContent = "x";
        return;
    }

    if(lim_val === ""){
        lim.className += " error";
        lim.placeholder = "Enter Some Value";
        mul.value = "Invalid Input";
        x.textContent = "x";
        return;
    }

    num_val = parseInt(num_val);
    lim_val = parseInt(lim_val);

    if(num_val  === 0 && lim_val === 0){
        var res = "";
        for(var i=0; i<=20; i++){
            res += "0";
            if(i!=10)
                res += ", ";
        }
        res += ".......";
        mul.value = res;
        setMult(num_val);
        x.textContent = "0  to 0";
        return;
    }

    if(lim_val < 0 || lim_val < num_val){
        lim.className += " error";
        lim.placeholder = "Invalid Input";
        mul.value = "Invalid Input";
        x.textContent = "x";
        return;
    }

    if(num_val < 0){
        num.className += " error";
        num.placeholder = "Invalid Input";
        mul.value = "Invalid Input";
        x.textContent = "x";
        return;
    }

    var ans = "";
    var current = parseInt(num_val);
    num_val = parseInt(num_val);
    lim_val = parseInt(lim_val);
    while(current <= lim_val){
        ans += current;
        current += num_val;

        if(current <= lim_val){
            ans += ", ";
        }
    }
    mul.value = ans;

    x.textContent = num_val + " to " + lim_val;
    return;
};

function primes(){
    var num = document.getElementById("input1");
    var lim = document.getElementById("input2");
    var pri = document.getElementById("prime_res");
    var x   = document.getElementById("x_prime");
    var num_val = num.value;
    var lim_val = lim.value;

    num.className = "input_area";
    lim.className = "input_area";

    if(num_val === "" && lim_val === ""){
        num.className += " error";
        num.placeholder = "Enter Some Value";

        lim.className += " error";
        lim.placeholder = "Enter Some Value";

        pri.value = "Invalid Input";
        x.textContent = "x";
        return;
    }

    if(num_val === ""){
        num.className += " error";
        num.placeholder = "Enter Some Value";
        pri.value = "Invalid Input";
        x.textContent = "x";
        return;
    }

    if(lim_val === ""){
        lim.className += " error";
        lim.placeholder = "Enter Some Value";
        pri.value = "Invalid Input";
        x.textContent = "x";
        return;
    }

    num_val = parseInt(num_val);
    lim_val = parseInt(lim_val);

    if(num_val  == "0" && lim_val == "0"){
        lim.className += " error";
        num.className += " error";
        num.placeholder = "Invalid Input";
        lim.placeholder = "Invalid Input";
        x.textContent = "x";
        return;
    }

    if(lim_val < 0 || lim_val < num_val){
        lim.className += " error";
        lim.placeholder = "Invalid Input";
        mul.value = "Invalid Input";
        x.textContent = "x";
        return;
    }

    if(num_val <= 1){
        num.className += " error";
        num.placeholder = "Invalid Input";
        mul.value = "Invalid Input";
        x.textContent = "x";
        return;
    }

    var ans = "";
    var current = parseInt(num_val);
    num_val = parseInt(num_val);
    lim_val = parseInt(lim_val);

    var prev = -1;
    for(var i = num_val; i<=lim_val; i++){
        var d = 0;
        for(var j=2; j<=parseInt(Math.sqrt(i)); j++){
            if(i%j==0)
                d = 1;
        }

        if(d==0){
            if(prev != -1){
                ans += (prev + ", ");
                prev = i;
                continue;
            }
            prev = i;
        }
    }

    if(prev != -1)
        ans += prev;

    pri.value = ans;
    x.textContent = num_val  + " to " + lim_val;
    return;
};

function copy_content(field){
    var val = document.getElementById(field);
    val.select();
    document.execCommand("Copy");
}