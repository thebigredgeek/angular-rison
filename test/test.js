var encodedRison = [
			"(a:0,b:1)",
		    "(a:0,b:foo,c:'23skidoo')",
		    "!t",
		    "!f",
		    "!n",
		    "''",
		    "0",
		    "1.5",
		    "-3",
		    "1e30",
		    "1e-30",
		    "a",
		    "'0a'",
		    "'abc def'",
		    "()",
		    "(a:0)",
		    "(id:!n,type:/common/document)",
		    "!()",
		    "!(!t,!f,!n,'')",
		    "'-h'",
		    "a-z",
		    "'wow!!'",
		    "domain.com",
		    "'user@domain.com'",
		    "'US $10'",
		    "'can!'t'",
		    "'Control-F: \u0006'",
		    "'Unicode: \u0beb'"
		],
		decodedRison = [
			{
			  "a":0,
			  "b":1
			},
			{
 	 			"a":0,
  				"b":"foo",
  				"c":"23skidoo"
			},
			true,
			false,
			null,
			"",
			0,
			1.5,
			-3,
			1e+30,
			1e-30,
			"a",
			"0a",
			"abc def",
			{},
			{
				"a":0
			},
			{
				"id":null,
				"type":"/common/document"
			},
			[],
			[
				true,
				false,
				null,
				""
			],
			"-h",
			"a-z",
			"wow!",
			"domain.com",
			"user@domain.com",
			"US $10",
			"can't",
			"Control-F: \u0006",
			"Unicode: ௫"
		];

describe("Test Cases",function(){
	it("Have Equal Length",function(){
		console.log("Test Control Case");
		expect(encodedRison.length).toEqual(decodedRison.length);
	});
});

describe("Angular Rison",function(){
	beforeEach(module('rison'));
	console.log("Test Rison");
	describe("Decoder",function(){
		console.log("Test Decode");
		it("decodes",inject(function($rison){
			var i;
			for(i=0;i<decodedRison.length;i++){
				expect($rison.parse(encodedRison[i])).toEqual(decodedRison[i]);
			}
		}));
	});
	describe('Encoder',function(){
		console.log("Test Encode");
		it("encodes",inject(function($rison){
			var i;
			for(i=0;i<encodedRison.length;i++){
				expect($rison.stringify(decodedRison[i])).toEqual(encodedRison[i]);
			}
		}));
	});
})