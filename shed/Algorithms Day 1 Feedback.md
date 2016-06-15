Nice work! I recognize that you probably worked the algorithms independently, but since your results were very similar and my comments apply to both, we can talk as a group.

    function firstReverse(string) {
        reverseStri = ""
        var i = 0;
        while (i < string.length) {
            reverseStri = string[i] + reverseStri;
            i += 1
            console.log(reverseStri)
        }
    }
    firstReverse("helloworld")

    function reverse_string(string) {
        reverse_string = ""
        for (var i = 0; i < string.length; i++) {
            reverse_string = string[i] + reverse_string;
            console.log(reverse_string)
        }
    }
    console.log(reverse_string('hello'));

Both of your solutions resulted in a reversed string being printed to the console. Very cool! My favorite part is that you achieved this via a method I would not have thought of, so I've immediately benefited from your work and that makes for a great start to my day.

If you choose to, here's a question to tinker with: what value does invoking the function return? When you run:

    console.log(functionName(string));

What value is shown in the console? Try removing the console.log from inside the function if it helps clarify. What you see by logging the function invocation is the actual, _final_ value being produced by the function, which is different than the "side effect" of the console.log from _within_ the function.

Consider that if we started invoking the reverseString function in various places around our greater piece of software, what is the value being produced (aka **returned**)?

Logging to the console does not in itself produce any value that is usable by the rest of the program, but it is a powerful way for showing us what the value of an element is at a given moment. Ultimately, we want our function's final value (at the point of invocation) to return our intended result.

Thank you both for your feedback. As you watch the lectures and work the algorithms, jot down your 1&1's for those as well.

They can be as simple as:

> +Hard: totally new territory for me! <br>
> -I didn't suffer enough!

I may not give feedback like this everyday, in part because I may not be quite as comfy with the material as we push on, and in part because you will both be getting better at troubleshooting with less info, but I hope you find this helpful for now :)

Onward!
