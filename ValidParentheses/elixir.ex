defmodule Solution do
  @closed_pairs %{"[" => "]", "{" => "}", "(" => ")"}
  @open_symbols Map.keys(@closed_pairs)

  def verify([], []), do: true
  def verify(_, []), do: false

  def verify(in_open, [new_symbol | rest]) do
  if Enum.member?(@open_symbols, new_symbol) do
    # if the new symbol is an opening symbol, add it to the stack
    verify([new_symbol | in_open], rest)
  else
    # if the new symbol is a closing symbol, check the last opened symbol
    case in_open do
      [last_open | rest_open] ->
        if @closed_pairs[last_open] == new_symbol do
          verify(rest_open, rest) # continue verification with the rest of the stack
        else
          false # mismatch detected
        end

      [] ->
        false
    end
  end
end

@spec is_valid(s :: String.t()) :: boolean
def is_valid(s) do
  characters = String.split(s, "", trim: true)
  verify([], characters)
end
end
