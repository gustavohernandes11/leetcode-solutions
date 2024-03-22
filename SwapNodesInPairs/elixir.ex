# Definition for singly-linked list.
#
# defmodule ListNode do
#   @type t :: %__MODULE__{
#           val: integer,
#           next: ListNode.t() | nil
#         }
#   defstruct val: 0, next: nil
# end

defmodule Solution do
  @spec swap_pairs(head :: ListNode.t | nil) :: ListNode.t | nil
  def swap_pairs(nil), do: nil
  def swap_pairs(old_head = %ListNode{next: nil}), do: old_head
  def swap_pairs(old_head = %ListNode{next: new_head = %ListNode{}}) do
      %{new_head | next: %{old_head | next: swap_pairs(new_head.next)}}
  end
end
