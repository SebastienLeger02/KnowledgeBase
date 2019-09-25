package trinov.flw.services.model.dechets;

import trinov.flw.data.entity.dechets.WasteCategory;

import java.util.ArrayList;
import java.util.List;

public class TreeWasteModel {
    //private Long id ;
    private String name;
    private List<TreeWasteModel> children = new ArrayList<>();
    private Boolean leaf = false;
    private Boolean expand = false;
    private Long idx;
    private String letter;
    private Long code;
    private Boolean isDangerous;
    private Boolean isInert;
    private Boolean isRegulated;
    private Long parentIdx;

    public TreeWasteModel(){}

    /*public TreeWasteModel(WasteCategory wasteCategory) {
        //this.id = wasteCategory.getId();
        this.name = wasteCategory.getName();
        this.leaf = null;
        this.children = null;
        this.idx = null;
    }
    */

   // public Long getId() { return id; }
  //  public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public List<TreeWasteModel> getChildren() { return children; }
    public void setChildren(List<TreeWasteModel> children) { this.children = children; }

    public Boolean getLeaf() { return leaf; }
    public void setLeaf(Boolean leaf) { this.leaf = leaf; }

    public Boolean getExpand() { return expand; }
    public void setExpand(Boolean expand) { this.expand = expand; }

    public Long getIdx() { return idx; }
    public void setIdx(Long idx) { this.idx = idx; }

    public String getLetter() { return letter; }
    public void setLetter(String letter) { this.letter = letter; }

    public Long getCode() { return code; }
    public void setCode(Long code) { this.code = code; }

    public Boolean getDangerous() { return isDangerous; }
    public void setDangerous(Boolean dangerous) { isDangerous = dangerous; }

    public Boolean getInert() { return isInert; }
    public void setInert(Boolean inert) { isInert = inert; }

    public Boolean getRegulated() { return isRegulated; }
    public void setRegulated(Boolean regulated) { isRegulated = regulated; }

    public Long getParentIdx() {
        return parentIdx;
    }

    public void setParentIdx(Long parentIdx) {
        this.parentIdx = parentIdx;
    }
}
