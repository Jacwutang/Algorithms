# There are many ways to implement these methods, feel free to add arguments
# to methods as you see fit, or to create helper methods.

require "bst_node"

class BinarySearchTree
  attr_reader :root

  def initialize
    @root = nil
  end

  def insert(value)


    if @root.nil?
      @root = BSTNode.new(value)
      return
    end

    inserted = false

  current_node = @root
  while(inserted == false)
    if value <= current_node.value
      if current_node.left.nil?
        current_node.left = BSTNode.new(value)
        inserted = true
      else
        current_node = current_node.left
      end

    else
      if current_node.right.nil?
        inserted = true
        current_node.right = BSTNode.new(value)
      else
        current_node = current_node.right
      end

    end
  end
end

  def find(value, tree_node = @root)
    return nil if tree_node.nil?

    return tree_node if tree_node.value == value

    if value <= tree_node.value
        #search left sub-tree
        left_sub_tree = find(value, tree_node.left)

        return left_sub_tree if  !left_sub_tree.nil?


    else
        #search right sub-tree
        right_sub_tree = find(value, tree_node.right)

        return right_sub_tree if !right_sub_tree.nil?

    end

  end

  def delete(value)
  end

  # helper method for #delete:
  def maximum(tree_node = @root)
  end

  def depth(tree_node = @root)
  end

  def is_balanced?(tree_node = @root)
  end

  def in_order_traversal(tree_node = @root, arr = [])
  end


  private
  # optional helper methods go here:

end
