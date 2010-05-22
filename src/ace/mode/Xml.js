ace.provide("ace.mode.Xml");

ace.mode.Xml = function() {
    this.$tokenizer = new ace.Tokenizer(new ace.mode.XmlHighlightRules().getRules());
};
ace.inherits(ace.mode.Xml, ace.mode.Text);

(function() {

    this.getNextLineIndent = function(state, line, tab) {
        return this.$getIndent(line);
    };

}).call(ace.mode.Xml.prototype);