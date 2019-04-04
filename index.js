function get_content_of_line(state, line){
  pos = state.bMarks[line] + state.tShift[line];
  max = state.eMarks[line];
  return state.src.substring(pos, max).trim();
}

function find_next_line_index_with_str(state, startLine, endLine, str){
  for(var nextLine = startLine + 1 ; nextLine <= endLine ; nextLine ++ ){
    if(get_content_of_line(state, nextLine) == str){
      return nextLine;
    }
  }
  return undefined;
}

function tetris_block_ruler(state, startLine, endLine, silent) {
  if(get_content_of_line(state, startLine).match(/tetris\s*{/) === null){
    return false;
  }

  line_of_block_end = find_next_line_index_with_str(state, startLine, endLine, "}")
  if(line_of_block_end == "undefined"){
    return false;
  }

  state.line = line_of_block_end + 1;

  token         = state.push('tetris', '', 0);
  token.content = state.getLines(startLine + 1, line_of_block_end + 1, 0, true);
  token.map     = [ startLine, state.line ];

  return true;
}


function tetris_renderer(tokens, idx) {
  var content = tokens[idx].content;
  var lines = content.split("\n");

  // remote the last 2 line
  lines.pop();
  lines.pop();

  var output = [];
  output.push('<div class="tetris">');
  for(var i = 0 ; i < lines.length ; i++){
    for(var j = 0 ; j < 10 ; j ++){
      var char = lines[i][j] || ' ';
      char = char == ' ' ? 'empty' : char;
      output.push('<span class="tetris-' + char + '"></span>');
    }
    if(i < lines.length - 1){
      output.push('<br/>');
    }
  }
  output.push('</div>');
  return output.join("\n");
};

module.exports = function tetris_plugin(md) {
  md.block.ruler.after('code', 'tetris', tetris_block_ruler);
  md.renderer.rules.tetris = tetris_renderer;
}