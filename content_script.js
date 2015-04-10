var replaced = $("body").html().replace(/cyber/g,'<span class=\"rainbow\">wizard</span>').replace(/Cyber /g,'<span class=\"rainbow\">Wizard </span>').replace(/Cyber-/g,'<span class=\"rainbow\">Wizard-</span>');;
$("body").html(replaced);
