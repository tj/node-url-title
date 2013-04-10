
var title = require('..');

describe('title(url)', function(){
  describe('with a pathname', function(){
    it('should choose the largest segment', function(){
      title('http://www.ign.com/articles/2013/01/23/man-of-steel-gets-a-pg-13-rating')
      .should.equal('Man of steel gets a pg 13 rating');

      title('http://www.cnn.com/2013/01/31/us/alabama-child-hostage/index.html?hpt=hp_t1')
      .should.equal('Alabama child hostage');

      title('http://www.nytimes.com/2013/01/31/education/law-schools-applications-fall-as-costs-rise-and-jobs-are-cut.html?hp')
      .should.equal('Law schools applications fall as costs rise and jobs are cut');

      title('http://www.reddit.com/r/science/comments/17l7dr/a_new_type_of_transistor_that_can_be_switched/')
      .should.equal('A new type of transistor that can be switched');
    })
  })

  describe('without a pathname', function(){
    it('should use the hostname', function(){
      title('http://www.ign.com').should.equal('Ign');
      title('http://www.ign.com/').should.equal('Ign');
      title('http://ign.com/').should.equal('Ign');
      title('ign.com').should.equal('Ign');
      title('cute-overload.com').should.equal('Cute overload');
    })
  })
})
