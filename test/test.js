describe("A test",function(){
	beforeEach(module('rison'));
	describe('rison',function(){

		it("contains a sepc with an expection",inject(function($rison){
			expect($rison.hello()).toEqual('world');
			expect($rison.hello()).toNotEqual('worl');
		}));
	});
})